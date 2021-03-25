import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from "styled-components"

import { Device } from "./headerItems"
import { Container } from "../layoutComponents"
import Search from "../forms/search"
import Filter from "../forms/filter"

import { FaShoppingCart, FaPhoneAlt } from 'react-icons/fa';

import { Company } from "../company"
import { brands, SEARCH_CLEAR_FILTERS, UPDATE_SEARCH, SET_LOADING } from '../../redux/reducers/search'
import { connect } from 'react-redux';


const Header = styled.header`
    @media screen and (min-width: ${Device.md}) {
        display: none;
    }
`

const HeaderWrapper = styled.div`
    padding: 1em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    img {
        width: 250px;

        @media screen and (max-width: ${Device.sm}) {
            width: 150px;
        }
    }
`

const Nav = styled.nav``

const NavList = styled.ul`
        display: ${({ nav }) => (nav ? "flex" : "none")};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3em 0;
        margin: 0;
        position: absolute;
        top: 95.45px;
        left: 50%;
        transform: translateX(-50%); 
        width: 100%;
        list-style-type: none;
        box-shadow: var(--shadow-bottom);
        background: var(--clr-light-secondary);

        @media screen and (max-width: ${Device.sm}) {
            top: 70px;
        }
`

const Burger = styled.div`
    cursor: pointer;
    display: block;
    
    div {
        width: 25px;
        height: 3px;
        margin: 5px;
        background-color: var(--clr-dark);

        :nth-child(1){
            transform: ${({ nav }) => (nav ? "rotate(-45deg) translate(-6px, 5px)" : "")} ;
        }
        :nth-child(2){
            opacity: ${({ nav }) => (nav ? "0" : "")} ;
        }
        :nth-child(3){
            transform: ${({ nav }) => (nav ? "rotate(45deg) translate(-6px, -5px)" : "")} ;
        }
    }
`

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    text-transform: capitalize;
    color: var(--txt-dark);
    font-weight: var(--fw-500);

    // aligning text with icon
    display: flex;
    align-items: center;
    gap: 2px;

    &:hover, &:focus {
        cursor: pointer;
        opacity: 0.7;
    }
`

const QueryWrapper = styled.div`
`

const FilterWrapper = styled.div`
    display: flex;

    & > * {
        width: 100%;
    }

    & > * + * {
        margin-left: 2em;
    }
`

export function MobileHeader(props) {
    const [nav, navOpen] = useState(false);
    const _brands = brands.map(brand => ({ value: brand, label: brand }))

    const location = useLocation();
    const history = useHistory();

    function toggleMenu() {
        navOpen(!nav);
    }

    const performSearch = (ev) => {

        props.setLoading(true);

        if (!['category', 'brands/', 'categories'].some(p => location.pathname.includes(p)))
            history.push('/products');

        if (ev.key === 'Enter' || ev.type === 'click') {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }

    return (
        <>
            <Header>
                <Container className="spacing">
                    <HeaderWrapper>
                        <LogoContainer>
                            <Link to="/"><img src="../../../images/logo.svg" alt="Tractor1 logo" /></Link>
                        </LogoContainer>
                        <Nav>
                            <Burger nav={nav} onClick={toggleMenu}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </Burger>
                            <NavList nav={nav} onClick={toggleMenu}>
                                <div className="spacing">
                                    <div>
                                        <li><a href="tel: 877-358-2583"><FaPhoneAlt />{Company.tel1}</a></li>
                                    </div>
                                    <div>
                                        <li><StyledLink to="/categories/undercarriage">undercarriage parts</StyledLink></li>
                                        <li><StyledLink to="/brands">brands</StyledLink></li>
                                        <li><StyledLink to="/category/clearance">clearance</StyledLink></li>
                                    </div>
                                    <div>
                                        <li><StyledLink to="/contact">contact</StyledLink></li>
                                        <li><StyledLink to="/cart"><FaShoppingCart />cart</StyledLink></li>
                                    </div>
                                </div>
                            </NavList>
                        </Nav>
                    </HeaderWrapper>
                    <QueryWrapper className="spacing">
                        <Search value={props.search.criteria} onChange={(ev) => props.updateSearch({ ...props.search, criteria: ev })} handleSubmit={performSearch} />
                        <FilterWrapper>
                            <Filter
                                label="Select Brand"
                                value={props.search.brand}
                                options={_brands}
                                onChange={v => props.updateSearch({ ...props.search, brand: v })}
                            />
                            <Filter
                                onChange={v => props.updateSearch({ ...props.search, model: v })}
                                value={props.search.model}
                                options={[]}
                                label="Select Model"
                            />
                        </FilterWrapper>
                    </QueryWrapper>
                </Container>
            </Header>
        </>
    )
}


const mapStateToProps = state => ({
    showFilters: state.search.showFilters,
    loading: state.search.loading,
    search: state.search.search
})

const mapDispatchToProps = dispatch => ({
    updateSearch: search => dispatch({ type: UPDATE_SEARCH, payload: search }),
    setLoading: value => dispatch({ type: SET_LOADING, payload: value }),
    clearFilters: () => dispatch({ type: SEARCH_CLEAR_FILTERS })
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);