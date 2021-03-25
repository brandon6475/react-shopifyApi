import React from 'react'

import Layout from "../components/layout"
import { Section, Container } from "../components/layoutComponents"
import PaymentMethod from "../components/cart/paymentMethod"

export default function shippingPage() {
    return (
        <Layout>
            <Section>
                <Container>
                    <PaymentMethod />
                </Container>
            </Section>
        </Layout>
    )
}
