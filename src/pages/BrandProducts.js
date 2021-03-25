import React, { useEffect } from 'react'

import { Section, Container, PageTitle } from "../components/layoutComponents"
import { connect } from 'react-redux'
import Products from '../components/products'
import { useParams } from 'react-router-dom'
import { UPDATE_SEARCH } from '../redux/reducers/search'


export function BrandProducts(props) {

    const params = useParams();

    const loadBrand = () => {
        props.updateSearch({
            ...props.search,
            brand : params.brand
        })
    }

    useEffect(() => {
        loadBrand();
    }, [params]);

    return (
        <Section>
            <PageTitle className="center">
                <h1 className="title">brands</h1>
                <p>/ {props.search.brand}</p>
            </PageTitle>
            <Container className="spacing">
                <Products query={[['vendor', props.search.brand]]}/>
            </Container>
        </Section>
    )
}


const mapStateToProps = state => ({
    search: state.search.search,
});


const mapDispatchToProps = dispatch => ({
    updateSearch: search => dispatch({ type: UPDATE_SEARCH, payload: search }),
})

export default connect(mapStateToProps, mapDispatchToProps)(BrandProducts);