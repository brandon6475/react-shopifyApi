import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

import { ActionsStacked } from "../layoutComponents"
import { ButtonPrimary } from "../a"
import { Wrapper } from "./cartItems"
import { connect } from 'react-redux';
import { ButtonSecondaryDark } from '../../components/buttons'

import client from '../../services/shopifyClient';
import { UPDATE_CHECKOUT } from '../../redux/reducers/cart';
import { TOOGLE_SEARCH_VIEW } from '../../redux/reducers/search';

import Skeleton from 'react-loading-skeleton';

const device = {
    md: "48em"
}

const CartGrid = styled.div`
    padding: 1em 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2em;
    border-bottom: 1px solid var(--txt-dark-secondary);

    @media screen and (max-width: ${device.md}) {
        grid-template-columns: 1fr;
    }
    
    div {
        display: flex;
        align-items: center;
    
        button {
            cursor: pointer;
            background: none;
            border: none;
            color: blue;
            padding: 0;
            margin: 0;
        }
    }
`

const GridHeaders = styled.div`
    padding: 1em 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2em;

    p {
        text-transform: uppercase;
    }


    @media screen and (max-width: ${device.md}) {
        display: none;
    }
`

const InfoWrapper = styled.div`
    text-transform: capitalize;
`

const CartInfo = styled.div``

const CartItem = props => {

    const cartItem = props.cartItem ?? { item: { title: 'Empty' } };

    const [qty, setQty] = useState(cartItem.quantity);

    const handleChange = (ev) => {
        if (ev.target.validity.valid) {
            try {
                let value = parseInt(ev.target.value, 10);
                if (ev.target.value === '' || value > 0) {
                    setQty(value);
                }
            } catch (error) {
            }
        }
    }


    const setDefaultQuantity = ev => {
        const _qty = (!qty || qty < 1) ? 1 : qty;
        setQty(_qty)
        props.onChange(cartItem, _qty);
    }

    return (
        <CartGrid>
            <div>
                <p className="bold">{cartItem.title}</p>
            </div>
            <div>
                {props.cartItem && <input type="number" id="quantity" defaultValue="1" onBlur={setDefaultQuantity} onChange={handleChange} value={qty} />}
            </div>
            <div>
                {props.cartItem && <p>${(cartItem.variant.price * cartItem.quantity).toFixed(2)}</p>}
            </div>
            <div>
                {props.cartItem && <button onClick={() => props.onRemoveItem(cartItem.id)}>Remove</button>}
            </div>
        </CartGrid>
    )
}

export function CartList(props) {

    const getTotal = items => {
        return items.map(cartItem => cartItem.variant.price * cartItem.quantity).reduce((a, b) => a + b, 0);
    }

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, isLoading] = useState(true);

    const loadCart = () => {

        if (props.checkout != null)
            client.checkout.fetch(props.checkout.id).then((checkout) => {
                try {
                    setCartItems(checkout.lineItems)
                    updateTotal(checkout.lineItems);
                } catch (error) {
                    props.updateCheckout(null);
                }
            }).then(() => {
                setTimeout(() => {
                    isLoading(false);
                }, 400);
            });

    }

    const handleRemoveItem = (productId) => {
        client.checkout.removeLineItems(props.checkout.id, [productId]).then((checkout) => {
            props.updateCheckout(checkout);
            setCartItems(checkout.lineItems)
        });
    };

    const handleUpdateLine = (productId, quantity) => {
        const lineItemsToUpdate = [
            { id: productId, quantity: quantity }
        ];

        return client.checkout.updateLineItems(props.checkout.id, lineItemsToUpdate).then((checkout) => {
            setCartItems(checkout.lineItems);
        });

    }

    const updateTotal = (items) => {
        const total = getTotal(items);
        setTotal(total.toFixed(2));
    }

    const onQuantityChange = (_cartItem, quantity) => {
        const items = cartItems.map(cartItem => cartItem.id === _cartItem.id ? ({ ...cartItem, quantity }) : cartItem);
        handleUpdateLine(_cartItem.id, quantity).then(() => updateTotal(items));
    }

    const disableCheckout = !cartItems.length;

    useEffect(() => {
        loadCart();
        props.toogleFilters(false);

        return () => {
            props.toogleFilters(true);
        }
    }, [props.checkout])

    return (
        loading ?
            <div>
                <Skeleton height={100} style={{ marginBottom: 40 }} />
                <Skeleton height={20} count={3} />
                <div style={{marginBottom: 40}} />
                <Skeleton height={20} count={3} />
                <div style={{marginBottom: 40}} />
                <Skeleton height={20} count={3} />
                <div style={{marginBottom: 40}} />
                <Skeleton height={100} />
            </div>
            :
            <Wrapper className="spacing-lg">
                <div>
                    <h2 className="title">cart</h2>
                    <hr />
                </div>
                <div>
                    <GridHeaders>
                        <div>
                            <p className="bold">item</p>
                        </div>
                        <div>
                            <p className="bold">quantity</p>
                        </div>
                        <div>
                            <p className="bold">total</p>
                        </div>
                    </GridHeaders>
                    {
                        cartItems.length ? cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} onChange={onQuantityChange} onRemoveItem={handleRemoveItem} />)
                            : <CartItem />
                    }
                </div>
                <InfoWrapper className="spacing">
                    <CartInfo>
                        <p className="body--large">total: ${total}</p>
                    </CartInfo>
                </InfoWrapper>
                <ActionsStacked>
                    {disableCheckout ? <ButtonSecondaryDark>Continue to Checkout</ButtonSecondaryDark>
                        : <ButtonPrimary href={props.checkout.webUrl} >Continue to Checkout &#8594;</ButtonPrimary>
                    }
                    <Link to="/undercarriage">Continue Shopping</Link>
                </ActionsStacked>
            </Wrapper>
    )
}

const mapStateToProps = state => ({
    checkout: state.cart.checkout
})


const mapDispatchToProps = dispatch => ({
    toogleFilters: show => dispatch({ type: TOOGLE_SEARCH_VIEW, payload: show }),
    updateCheckout: checkout => dispatch({ type: UPDATE_CHECKOUT, payload: checkout }),
})


export default connect(mapStateToProps, mapDispatchToProps)(CartList)
