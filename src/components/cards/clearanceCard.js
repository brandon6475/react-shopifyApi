import React from 'react'

import { Actions } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"
import { CardWrapper, CardText } from "./cardItems"
import { connect } from 'react-redux'

import { UPDATE_CHECKOUT } from '../../redux/reducers/cart'

import { UPDATE_PRODUCT_HANDLE } from '../../redux/reducers/shop'
import { moveViewToTop } from '../../util';

export function ClearanceCard(props) {

    const product = props.product;
    const variant = product.variants[0];

    return (
        <CardWrapper>
            <CardText className="spacing">
                <h2 className="bold">{product.title}</h2>
                <div>
                    <p className="body--small">part number: {product.handle}</p>
                    <p>price: ${variant.price}</p>
                </div>
                <Actions>
                    <ButtonPrimary to={"/products/" + product.handle} onClick={() => moveViewToTop(200)}>view details</ButtonPrimary>
                </Actions>
            </CardText>
        </CardWrapper>
    )
}



const mapDispatchToProps = dispatch => ({
    updateCheckout: value => dispatch({ type: UPDATE_CHECKOUT, payload: value }),
    setProductHandle: value => dispatch({ type: UPDATE_PRODUCT_HANDLE, payload: value })
})

const mapStateToProps = state => ({
    checkout: state.cart.checkout,
})

export default connect(mapStateToProps, mapDispatchToProps)(ClearanceCard);
