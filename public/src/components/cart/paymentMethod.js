import React from 'react'
import styled from "styled-components"

import { ActionsStacked } from "../layoutComponents"
import { ButtonPrimary, ButtonSecondaryDark } from "../buttons"
import { Wrapper } from "./cartItems"

export default function PaymentMethod() {
    return (
        <Wrapper className="spacing">
            <div>
                <h2 className="title">choose payment method</h2>
                <hr/>
            </div>
            <div>
                <p className="body--large">your total cost = $1,000.00</p>
            </div>
            <ActionsStacked>
                <ButtonSecondaryDark>paypal button here</ButtonSecondaryDark>
                <ButtonPrimary>secure payment server</ButtonPrimary>
            </ActionsStacked>
        </Wrapper>
    )
}
