import { Route } from "react-router-dom";

import Layout from '../components/layout';
import Home from './Home'
import Brands from './Brands'
import BrandProducts from './BrandProducts'
import Contact from './Contact'
import Payment from './Payment'
import Product from './Product'
import Cart from './Cart'

const pages = (
    <>
        <Route path="/cart">
            <Cart />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/brands/:brand">
            <BrandProducts />
        </Route>
        <Route path="/brands">
            <Brands />
        </Route>
        <Route path="/products">
            <Brands />
        </Route>
        <Route path="/products/:handler">
            <Product />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </>
)


export default pages;
