import React from 'react'

import { Actions } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"
import { CardWrapper, CardImg, CardText } from "./cardItems"
import { moveViewToTop, placeholder } from '../../util';

export default function TextCard(props) {

    const product = props.product;

    return (
        <CardWrapper>
            <CardImg src={product.images[0] ? product.images[0].src : placeholder} alt="undercarriage part" />
            <CardText className="spacing">
                <div>
                    <h2 className="bold">{product.title}</h2>
                    <p className="body--small">part number: {product.handle}</p>
                </div>
                <Actions>
                    <ButtonPrimary to={"/details/" + product.handle} onClick={() => moveViewToTop(200)} >view details</ButtonPrimary>
                </Actions>
            </CardText>
        </CardWrapper>
    )
}
