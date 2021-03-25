import React from 'react'

import { Section, Container, PageTitle, GridAuto } from "../components/layoutComponents"
import Brand from "../components/brand"
import { UPDATE_SEARCH, brands } from '../redux/reducers/search'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

export function Brands(props) {

    const history = useHistory();

    const go = brand => {
        props.updateSearch({ ...props.search, brand: brand });
        history.push('/brands/' + brand)
    }

    return (
        <Section>
            <PageTitle className="center spacing">
                <h1 className="title">brands</h1>
                <p>Click the brand you would like to view the parts for.</p>
            </PageTitle>
            <Container className="spacing">
                <GridAuto>
                    {brands.map(brand => <Brand key={brand} onClick={() => go(brand)} brand={brand} />)}
                </GridAuto>
            </Container>
        </Section>
    )
}

const mapStateToProps = state => ({
    search: state.search.search
})

const mapDispatchToProps = dispatch => ({
    updateSearch: search => dispatch({ type: UPDATE_SEARCH, payload: search }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Brands);