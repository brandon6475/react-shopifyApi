import React from 'react'

import Layout from "../components/layout"
import { Section, Container, GridTwo } from "../components/layoutComponents"
import BannerActions from "../components/banners/bannerActions"
import PriceCard from "../components/cards/priceCard"
import Filter from "../components/forms/filter"

export default function Clearance(props) {
    return (
        <Layout>
            <BannerActions
                img="../../images/placeholder.png"
                title="50% off undercarriage parts"

                toPrimary="#"
                buttonPrimary="877-358-2583"
            />

            <Section>
                <Container className="spacing">
                    <div className="center">
                        <h1 className="title">undercarriage parts clearance sale</h1>
                    </div>
                    <Filter
                        label="Filter by brand"
                    />
                    <GridTwo>
                        {props.data.allShopifyProduct.edges.map(({ node }) => <PriceCard product={node} />)}
                    </GridTwo>
                </Container>
            </Section>
        </Layout>
    )
}




export const query = graphql`
    query  {

        allShopifyProduct(filter: {tags: {in: ["clearance"]}}) {
            edges {
                node {
                    title
                    shopifyId
                    description
                    handle
                    images {
                        originalSrc
                    }
                    priceRange {
                        minVariantPrice {
                            amount
                        }
                    }
                }
            }
        }
}
`
