import React from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import { Route } from "react-router-dom";


import Home from './pages/Home'
import Brands from './pages/Brands'
import BrandProducts from './pages/BrandProducts'
import Contact from './pages/Contact'
import Product from './pages/Product'
import SearchResult from './pages/SearchResult'
import Category from './pages/subcategory'
import Cart from './pages/Cart'
import Layout from "./components/layout";
import RequestQuote from './pages/RequestQuote'


export default function Routes() {
    return (
        <Router>
            <Switch>
                <RouteWrapper path="/cart" component={Cart} />
                <RouteWrapper path="/contact" component={Contact} />
                <RouteWrapper path="/request-a-quote/" component={RequestQuote} />
                <RouteWrapper path="/category/:category/:subcategory" component={SearchResult} />
                <RouteWrapper path="/category/:category" component={SearchResult} />
                <RouteWrapper path="/categories/:category/:subcategory/:subsubcategory" component={Category} />
                <RouteWrapper path="/categories/:category/:subcategory" component={Category} />
                <RouteWrapper path="/categories/:category/" component={Category} />
                <RouteWrapper path="/brands/:brand" component={BrandProducts} />
                <RouteWrapper path="/brands" component={Brands} />
                <RouteWrapper path="/details/:handler" component={Product} />
                <RouteWrapper path="/products/:handler" component={Product} />
                <RouteWrapper path="/products" component={SearchResult} />
                <RouteWrapper path="/" component={Home} />
            </Switch>
        </Router>
    );
}


function RouteWrapper({
    component: Component,
    ...rest
}) {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}
