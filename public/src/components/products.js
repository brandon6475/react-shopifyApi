import React, { useEffect } from 'react'

import { GridTwo } from "./layoutComponents"
import PriceCard from "./cards/priceCard"
import ClearanceCard from "./cards/clearanceCard"
import client from '../services/shopifyClient'
import { useState } from 'react'
import TextCard from './cards/textCard'
import { CLEARANCE, RUBBER_TRACKS } from '../util'
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux'
import { SET_LOADING, SET_CUR_PAGE_NUM } from '../redux/reducers/search'
import Pagination from "./pagination";

export function Products(props) {

    const [products, setProducts] = useState([]);
    const [subProducts, setSubProducts] = useState([]);
    const {curPageNum, setCurPageNum} = props
    const perPageNum = 6;

    const getProducts = () => {
        const variable = client.graphQLClient.variable('query', 'String');
        const _query = [];

        props.search.criteria && _query.push(['', `${props.search.criteria}`]);
        props.search.brand && _query.push(['vendor', `${props.search.brand}`]);
        props.search.model && _query.push(['model', `${props.search.model}`]);

        const query = _query.concat(props.query).map(([a, b]) => `${a}:[${b}]`).join(' ');

        const productsQuery = client.graphQLClient.query('a', [variable], (root) => {
            root.addConnection('products', { args: { first: 50, query: variable } }, (product) => {

                product.addConnection('metafields', { args: { first: 5 } }, (metafield) => {
                    metafield.add('namespace')
                    metafield.add('key')
                    metafield.add('value')
                });

                product.addConnection('images', { args: { first: 1 } }, (metafield) => {
                    metafield.add('src')
                });

                product.addConnection('variants', { args: { first: 1 } }, (metafield) => {
                    metafield.add('price')
                });

                product.add('title');
                product.add('handle');
                product.add('productType');
                product.add('tags');
            });
        });

        // Call the send method with the custom products query
        client.graphQLClient.send(productsQuery, { query: query }).then(({ model, data }) => {
            const buf_products = model.products.map(p => ({
                ...p,
                is_clearance: p.tags.some(tag => [CLEARANCE].includes(tag.value)),
                purchaseable: p.tags.some(tag => [RUBBER_TRACKS, CLEARANCE].includes(tag.value))
            }));
            setProducts(buf_products);
            setTimeout(() => props.setLoading(false), 500);
            setSubProducts(buf_products.slice(0, perPageNum));
        });
    }

    useEffect(() => {
        getProducts();
    }, [props.query, props.search, props.loading]);

    const changePage = (page) => {
        setCurPageNum(page)
        let count = Number((page - 1) * perPageNum);
        setSubProducts(products.slice(count, count + perPageNum));
    }

    return (
        <>
        <GridTwo>
            {props.loading ?
                [1, 1].map((r, index) =>
                    <div key={index}>
                        <Skeleton height={200} style={{ marginBottom: 20 }} />
                        <Skeleton height={30} width={300} style={{ display: 'block', marginBottom: 20 }} />
                        <Skeleton height={30} width={200} style={{ display: 'block', marginBottom: 20 }} />
                        <Skeleton height={40} style={{ marginBottom: 20 }} />
                    </div>
                )

                : <DisplayProductsOrNotAvaialable products={subProducts} />
            }

            
        </GridTwo>
        {products.length ? <Pagination onChangePage={changePage} curPageNum={curPageNum}  products={products} /> : null}
        </>
    )
}

function DisplayProductsOrNotAvaialable(props) {
    
    if (props.products.length) {
        return (
            <>
                {
                    props.products.map(product => {
                        return (
                            product.is_clearance ? <ClearanceCard key={product.id} product={product} />
                                : product.purchaseable
                                    ? <PriceCard key={product.id} product={product} />
                                    : <TextCard key={product.id} product={product} />
                        )
                    })
                }
            </>
        )
    }

    return (
        <div className="center">
            <h1 className="title">No products available</h1>
        </div>
    )
}

export function fetchByHandle(handle) {

    const productsQuery = client.graphQLClient.query((root) => {
        root.add('productByHandle', { args: { handle: handle } }, (product) => {

            product.add('metafield', { args: { namespace: 'inventory', key: 'length' } }, (metafield) => {
                metafield.add('value')
            });

            product.addConnection('metafields', { args: { first: 5 } }, (metafield) => {
                metafield.add('key')
                metafield.add('value')
            });

            product.addConnection('images', { args: { first: 1 } }, (metafield) => {
                metafield.add('src')
            });
            product.addConnection('variants', { args: { first: 1 } }, (metafield) => {
                metafield.add('price')
                metafield.add('weight')
            });

            product.add('title');
            product.add('vendor');
            product.add('handle');
            product.add('availableForSale'); 
            product.add('totalInventory');
            product.add('productType');
            product.add('tags');
        });
    });

    // Call the send method with the custom products query
    return client.graphQLClient.send(productsQuery, { product: handle })
        .then(({ model }) => ({
            ...model.productByHandle,
            purchaseable: model.productByHandle?.tags?.some(tag => [RUBBER_TRACKS, CLEARANCE].includes(tag.value))
        }));
}

const mapStateToProps = state => ({
    curPageNum: state.search.curPageNum,
    search: state.search.search,
    loading: state.search.loading
})

const mapDispatchToProps = dispatch => ({
    setCurPageNum: value => dispatch({ type: SET_CUR_PAGE_NUM, payload: value}),
    setLoading: value => dispatch({ type: SET_LOADING, payload: value })
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);