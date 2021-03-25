import React from 'react'

import { Section, Container, PageTitle, GridTwo } from "../components/layoutComponents"
import Filter from "../components/forms/filter"
import { UPDATE_SEARCH } from '../redux/reducers/search'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'


export function Subcategory(props) {

    const params = useParams();

    const slug = params.category.readable();
    const s_slug = params.subcategory.readable();

    return (
        <Section>
            <PageTitle className="center">
                <p>Undercarriage Parts</p>
                <h1 className="title">/ {slug} / {s_slug}</h1>
            </PageTitle>
            <Container className="spacing">
                <Filter
                    label="Filter by brand"
                />
                <GridTwo>
                    {/* {props.data.allShopifyProduct.edges.filter(filtering).map(({ node }) => <PriceCard product={node} />)} */}
                </GridTwo>
            </Container>
        </Section>
    )
}


const mapStateToProps = state => ({
    search: state.search.search
})

const mapDispatchToProps = dispatch => ({
    updateSearch : search => dispatch({ type: UPDATE_SEARCH, payload: search }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Subcategory);