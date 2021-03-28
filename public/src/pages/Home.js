import React, { useState, useEffect} from 'react'

import Hero from "../components/hero"
import Filter from "../components/forms/filter"
import { Section, Container } from "../components/layoutComponents"
import { SEARCH_CLEAR_FILTERS, brands } from '../redux/reducers/search'
import { RUBBER_TRACKS } from '../util'
import Products from '../components/products'
import { connect } from 'react-redux'

export function Home(props) {

    const [brand, setBrand] = useState('');
    const [query, setQuery] = useState([
        ['tag', RUBBER_TRACKS]
    ]);

    const _brands = brands.map(brand => ({ value: brand, label: brand }));

    const updateSearch = (brand) => {
        setBrand(brand);
        const _query = [
            ['tag', RUBBER_TRACKS]
        ]

        if (brand) {
            _query.push(['vendor', brand])
        } else {
            _query.slice(0, 1)
        }
        setQuery(_query)
    }


    useEffect(() => {
        props.clearFilters();
        setQuery(query)
    },[])
    
    return (
        <>
            <Hero />
            <Section id="rubberTracks">
                <Container className="spacing">
                    <div className="center">
                        <h1 className="title">rubber tracks</h1>
                    </div>
                    <Filter options={_brands} value={brand} onChange={(brand) => updateSearch(brand)}
                        label="Filter by brand"
                    />
                    <Products query={query} />
                </Container>
            </Section>
        </>
    )
}


const mapDispatchToProps = dispatch => ({
    clearFilters : () => dispatch({ type : SEARCH_CLEAR_FILTERS  })
});


export default connect(null, mapDispatchToProps)(Home)