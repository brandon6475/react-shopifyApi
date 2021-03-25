import './styles/main.css'
import Routes from "./Routes";
import client from './services/shopifyClient';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { UPDATE_CHECKOUT } from './redux/reducers/cart'


function App(props) {

    function createCheckout() {
        if (props.checkout) {
            // console.log(props.checkout)
        }
        else
            return client.checkout.create().then(res => props.createCheckout(res))
    }

    useEffect(() => createCheckout(), [])

    return (
        <Routes />
    );
}

const mapStateToProps = state => ({
    checkout: state.cart.checkout
})

const mapDispatchToProps = dispatch => ({
    createCheckout: (checkout) => dispatch({ type: UPDATE_CHECKOUT, payload: checkout }),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);