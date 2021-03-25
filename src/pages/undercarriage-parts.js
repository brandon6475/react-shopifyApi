import React from 'react'

import Layout from "../components/layout"
import { Section, Container, PageTitle, GridThree } from "../components/layoutComponents"
import OptionCard from "../components/cards/optionCard"

export default function undercarriageParts() {
    return (
        <Layout>
            <Section>
                <PageTitle>
                    <h1 className="title center">undercarriage parts</h1>
                </PageTitle>
                <Container className="spacing">
                    <GridThree>
                        <OptionCard 
                            to="/subcategory"
                            img="../../images/machine-placeholder.png"
                            title="excavators"
                        />
                        <OptionCard 
                            to="/subcategory"
                            img="../../images/machine-placeholder.png"
                            title="track loaders"
                        />
                        <OptionCard
                            to="/subcategory"
                            img="../../images/machine-placeholder.png" 
                            title="skid steers"
                        />
                    </GridThree>
                </Container>
            </Section>
        </Layout>
    )
}
