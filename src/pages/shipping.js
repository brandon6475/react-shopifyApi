import React from 'react'

import Layout from "../components/layout"
import { Section, Container } from "../components/layoutComponents"
import Shipping from "../components/cart/shipping"

export default function shippingPage() {
    return (
        <Layout>
            <Section>
                <Container>
                    <Shipping />
                </Container>
            </Section>
        </Layout>
    )
}
