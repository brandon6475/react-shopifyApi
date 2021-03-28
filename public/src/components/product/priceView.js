import React, { useState } from 'react'
import styled from "styled-components"

import { Flex, Actions } from "../layoutComponents"
import { ButtonPrimary, ButtonSecondaryDark } from "../buttons"
import { Wrapper } from "./productItems"

import { Company } from "../company"
import client from '../../services/shopifyClient';
import { UPDATE_CHECKOUT } from '../../redux/reducers/cart'
import { connect } from 'react-redux'
import { placeholder } from '../../util';
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

const device = {
    md: "48em",
    lg: "55em"
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

const AddCart = styled.div`
    display: flex;

    @media screen and (max-width: ${device.lg}) {
        flex-direction: column;
    }

    & > * {
        width: 100%;
    }
`

const Description = styled.div`
    max-width: 70ch;
    width: 100%;
`

export function PriceView(props) {

    const product = props.product;
    const variant = product.variants[0];
    const history = useHistory();

    const [qty, setQty] = useState(1);

    if (!product.purchaseable) {
        history.push('/request-a-quote')
    }

    const AddToCart = () => {
        const lineItemsToAdd = [{ variantId: variant.id, quantity: qty }];
        client.checkout.addLineItems(props.checkout.id, lineItemsToAdd).then((checkout) => {
            history.push('/cart')
        });
    }

    const updateQuantity = ev => {
        if (ev.target.validity.valid) {
            try {
                let value = parseInt(ev.target.value, 10);
                if (ev.target.value === '' || value > 0)
                    setQty(value);
            } catch (error) {
            }
        }
    }

    const setDefaultQuantity = ev => {
        if (!qty || qty < 1) {
            setQty(1)
        }
    }

    const loadCheckout = () => {
        props.checkout && client.checkout.fetch(props.checkout.id).then((checkout) => {
            setQty((checkout.lineItems.find(r => r.variant.id === variant.id))?.quantity || 1);
        });
    }

    useEffect(() => {
        loadCheckout();
    }, [props.checkout]);

    const getField = fieldname => product.metafields.find(f => f.key === fieldname).value;
    console.log(JSON.stringify(product));
    return (
        <Wrapper className="spacing">
            <Flex>
                <Product className="spacing">
                    <h2 className="heading">{product.title}</h2>
                    <div>
                        <p>Ask us about this product: <a href="tel: 877-358-2583">{Company.tel1}</a></p>
                        <a href="mailto: cgrimm@tractor1.com">{Company.mail1}</a>
                    </div>
                    <img src={product.images[0] ? product.images[0].src : placeholder} alt="undercarriage part" />
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
                    <AddCart>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            disabled={!product.availableForSale}
                            pattern="[0-9]*"
                            value={qty}
                            onBlur={setDefaultQuantity}
                            onChange={updateQuantity} />
                        <Actions>
                            {
                                product.availableForSale ?
                                    <ButtonPrimary onClick={AddToCart}>add to cart</ButtonPrimary>
                                    :
                                    <ButtonSecondaryDark>Out of stock</ButtonSecondaryDark>
                            }
                        </Actions>
                    </AddCart>
                    <p className="body--large">price: ${variant.price}</p>
                </Aside>
            </Flex>
            <Description className="spacing">
                <div>
                    <p>Product Category: <strong>{product.tags.join(', ')}</strong></p>
                    <p>Brand: <strong>{product.vendor}</strong></p>
                    <p>Availability: {product.availableForSale ? 'In Stock' : 'Out of Stock'}{product.qty}</p>
                    <p>quantity: {product.totalInventory}</p>
                </div>
                <p>{product.description}</p>
            </Description>
        </Wrapper>
    )
}


const mapStateToProps = state => ({
    checkout: state.cart.checkout
})

const mapDispatchToProps = dispatch => ({
    updateCheckout: checkout => dispatch({ type: UPDATE_CHECKOUT, payload: checkout }),
})

export default connect(mapStateToProps, mapDispatchToProps)(PriceView);