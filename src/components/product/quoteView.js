import React from 'react'
import styled from "styled-components"

import { Flex } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"
import { Wrapper } from "./productItems"

import { Company } from "../company"
import { placeholder } from '../../util';

const device = {
	md: "48em"
}

const Product = styled.div`

    img {
        object-fit: cover;
    }
`

const Aside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: ${device.md}) {
        flex-direction: column-reverse;
    }
`

const Description = styled.div`
    max-width: 70ch;
    width: 100%;
`

export default function QuoteView(props) {


    const product = props.product;
    const variant = product.variants[0];

    const getField = fieldname => product.metafields.find(f => f.key === fieldname).value;

    return (
        <Wrapper className="spacing">
            <Flex>
                <Product className="spacing">
                    <h2 className="heading">{product.title}</h2>
                    <div>
                        <p>Ask us about this product: <a href="tel: 877-358-2583">{Company.tel1}</a></p>
                        <a href="mailto: cgrimm@tractor1.com">{Company.mail1}</a>
                    </div>
                    <img src={product.images[0] ? product.images[0].src : placeholder} alt="undercarriage part"/>
                </Product>
                <Aside className="spacing">
                <div>
                        <p><strong>Length:</strong> {getField('length')}</p>
                        <p><strong>Width:</strong> {getField('width')}</p>
                        <p><strong>Height:</strong> {getField('height')} </p>
                        <p><strong>Pitch:</strong> {getField('pitch')}</p>
                        <p><strong>Links:</strong> {getField('links')}</p>
                        <p><strong>Weight:</strong> {variant.weight} lbs</p>
                    </div>
                    <div>
                        <a href="#">{Company.tel1}</a>
                        <ButtonPrimary to="/request-a-quote">get price quote &#8594;</ButtonPrimary>
                    </div>
                </Aside>
            </Flex>
            <Description className="spacing">
                <div>
                    <p>Product Category: <strong>{product.tags.join(', ')}</strong></p>
                    <p>Brand: <strong>{product.vendor}</strong></p>
                </div>
                <p>{product.description}</p>
            </Description>
        </Wrapper>
    )
}
