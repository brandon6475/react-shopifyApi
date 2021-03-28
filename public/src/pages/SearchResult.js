import React, { useEffect } from 'react'

import { Section, Container, PageTitle } from "../components/layoutComponents"
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Products from '../components/products'
import BannerActions from '../components/banners/bannerActions'

export function SearchResult(props) {

    const params = useParams()
    const slug = params.category ? params.category.readable() : null;
    const [query, setQuery] = useState([]);

    useEffect(() => {
        const query = [];
        params.category && query.push(['tag', params.category]);
        params.subcategory && query.push(['tag', params.subcategory]);
        setQuery(query)
    }, [params.category, params.subcategory])
    
    return (
        <>
            {
                params.category && params.category === 'clearance' && <BannerActions
                    img="../../images/clearance-banner-bg.jpg"
                    title="50% off undercarriage parts"

                    toPrimary="#"
                    buttonPrimary="877-358-2583"
                />
            }
            <Section>
                <Container className="spacing">
                    {
                        (params.category && params.category !== 'clearance') ?
                            <PageTitle className="center">
                                <h1 className="title">Category</h1>
                                <p>/ {slug}</p>
                            </PageTitle>
                            :
                            <div className="center">
                                <h1 className="title">search results for: {props.searchCriteria || 'All items'}</h1>
                            </div>
                    }
                    <Products query={query} />
                </Container>
            </Section>
        </>
    )
}

const mapStateToProps = state => ({
    searchCriteria: state.search.search.criteria
})

export default connect(mapStateToProps)(SearchResult);