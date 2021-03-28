import React from 'react'

import { Section, Container } from "../components/layoutComponents"
import CartList from "../components/cart/cartList"
import { connect } from 'react-redux'

export function Cart() {
    return (
        <Section>
            <Container>
                <CartList />
            </Container>
        </Section>
    )
}

export default connect()(Cart)