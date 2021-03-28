import React from 'react'

import FormShipping from "../forms/formShipping"
import { Wrapper } from "./cartItems"

export default function Shipping() {
    return (
        <Wrapper className="spacing">
            <div>
                <h2 className="title">shipping details</h2>
                <hr/>
            </div>
            <div>
                <FormShipping />
            </div>
        </Wrapper>
    )
}
