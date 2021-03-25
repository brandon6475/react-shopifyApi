import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { Section, Container } from "../components/layoutComponents"
import PriceView from "../components/product/priceView"

import Skeleton from 'react-loading-skeleton';
import ProductQuote from '../components/product/quoteView';
import { TOOGLE_SEARCH_VIEW } from '../redux/reducers/search';
import { useParams } from 'react-router-dom'
import { fetchByHandle } from '../components/products';
import { moveViewToTop } from '../util';

export function Product(props) {

    const [product, setProduct] = useState(null);
    const params = useParams();

    const loadProduct = () => {
        fetchByHandle(params.handler).then(res => setProduct(res))
    }

    useEffect(() => {
        loadProduct();
        moveViewToTop(100);

        props.toogleFilters(false);

        return () => {
            props.toogleFilters(true);
        }

    }, []);

    return (
        <Section>
            <Container>
                {
                    product
                        ? (product.purchaseable ? <PriceView product={product} /> : <ProductQuote product={product} />)
                        :
                        <div>
                            <Skeleton height={450} count={1} />
                        </div>}
            </Container>
        </Section>
    )
}


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    toogleFilters: show => dispatch({ type: TOOGLE_SEARCH_VIEW, payload: show }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
