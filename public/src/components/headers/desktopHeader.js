import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from "styled-components"

import { Device } from "./headerItems"
import { Container } from "../layoutComponents"
import Search from "../forms/search"
import Filter from "../forms/filter"

import { AiFillCaretDown } from 'react-icons/ai';
import { FaShoppingCart, FaPhoneAlt } from 'react-icons/fa';

import { brands, SEARCH_CLEAR_FILTERS, UPDATE_SEARCH, SET_LOADING } from '../../redux/reducers/search'
import { Company } from "../company"
import { connect } from 'react-redux';

const Header = styled.header`
    @media screen and (max-width: ${Device.md}) {
        display: none;
    }
`

const HeaderWrapper = styled.div`
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LogoContainer = styled.div`
`

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const NavList = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;

    & > * + * {
        margin-left: 2em;
    }

    li {
        a {
            text-decoration: none;
            text-transform: uppercase;
            color: var(--txt-dark);
            font-weight: var(--fw-500);
            display: flex;
            align-items: center;
            gap: 2px;

            &:hover, &:focus {
                cursor: pointer;
                opacity: 0.7;
            }
        }
    }
`

// hover dropdown 
const Dropdown = styled.li`
    ul {
        position: absolute;
        z-index: 1000;
        display: none;
        opacity: 1;
        margin: 0;
        padding: 2em 6em 2em 1em;
        list-style-type: none;
        background: var(--clr-dark);

        li {
            a {
                color: var(--txt-light);
            }
        }
    }

    &:hover {
        ul {
            display: flex;
            flex-direction: column;
        }
    }
`

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    text-transform: uppercase;
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

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    
    & > * + * {
        margin-left: 2em;
    }

    .first {
        width: 100%;
    }

    .second {
        flex: 1;
    }
`

const FilterWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;

    & > * {
        width: 100%;
    }

    & > * + * {
        margin-left: 2em;
    }
`

export function DesktopHeader(props) {
    const _brands = brands.map(brand => ({ value: brand, label: brand }))
    const models = [];

    const location = useLocation();
    const history = useHistory();
    const [search, updateSearch] = useState({
        criteria: '',
        model: '',
        brand: '',
    });


    const performSearch = (ev) => {
        if (ev.key === 'Enter' || ev.type === 'click') {

            props.updateSearch(search);
            props.setLoading(true);

            if (!['category', 'brands/', 'categories'].some(p => location.pathname.includes(p)))
                history.push('/products');

            ev.preventDefault();
            ev.stopPropagation();
        }
    }

    useEffect(() => {
        if (!['products'].some(p => location.pathname.includes(p)))
            props.clearFilters();
    }, [location.pathname])

    useEffect(() => {
        updateSearch(props.search)
    }, [props.search])

    return (
        <>
            <Header>
                <Container>
                    <HeaderWrapper className="spacing">
                        <LogoContainer>
                            <Link to="/" onClick={props.clearFilters}>
                                <img src="../../../images/logo.svg" alt="Tractor1 logo" width={props.logoWidth} height={props.logoHeight} />
                            </Link>
                        </LogoContainer>
                        <Nav>
                            <NavList>
                                <Dropdown>
                                    <StyledLink to="/categories/undercarriage">undercarriage parts<AiFillCaretDown /></StyledLink>
                                    <ul>
                                        <li><StyledLink onClick={props.clearFilters} to="/categories/undercarriage/excavators">excavators</StyledLink></li>
                                        <li><StyledLink onClick={props.clearFilters} to="/categories/undercarriage/bulldozer">bulldozer</StyledLink></li>
                                        <li><StyledLink onClick={props.clearFilters} to="/categories/undercarriage/track-loaders">track loaders</StyledLink></li>
                                        <li><StyledLink onClick={props.clearFilters} to="/categories/undercarriage/skid-steers">skid steers</StyledLink></li>
                                        <li><StyledLink onClick={props.clearFilters} to="/categories/undercarriage/mini-excavators">Mini Excavators</StyledLink></li>
                                    </ul>
                                </Dropdown>
                                <li><StyledLink to="/brands">brands</StyledLink></li>
                                <Dropdown>
                                    <StyledLink to="/category/clearance">clearance<AiFillCaretDown /></StyledLink>
                                    <ul>
                                        <li><StyledLink onClick={props.clearFilters} to="/category/clearance/repair-parts">Repair parts</StyledLink></li>
                                        <li><StyledLink onClick={props.clearFilters} to="/category/clearance/hardware">Hardware</StyledLink></li>
                                        <li><StyledLink onClick={props.clearFilters} to="/category/clearance/ground-engaging-tools">Ground engaging tools</StyledLink></li>
                                        <li><StyledLink onClick={props.clearFilters} to="/category/clearance/undercarriage">Undercarriage</StyledLink></li>
                                    </ul>
                                </Dropdown>
                            </NavList>
                            <NavList>
                                <li><a href="tel: 877-358-2583"><FaPhoneAlt />{Company.tel1}</a></li>
                                <li><StyledLink onClick={props.clearFilters} to="/contact">contact</StyledLink></li>
                            </NavList>
                        </Nav>
                    </HeaderWrapper>
                    <QueryWrapper className="spacing">

                        <SearchWrapper>
                            <div className="first">
                                <Search value={search.criteria} onChange={(ev) => updateSearch({ ...search, criteria: ev })} handleSubmit={performSearch} />
                            </div>
                            <div className="second">
                                <StyledLink to="/cart"><FaShoppingCart />cart</StyledLink>
                            </div>
                        </SearchWrapper>
                        <FilterWrapper>
                            <Filter
                                label="Select Brand"
                                value={search.brand}
                                options={_brands}
                                onChange={v => updateSearch({ ...search, brand: v })}
                            />
                            <Filter
                                onChange={v => updateSearch({ ...search, model: v })}
                                value={search.model}
                                options={models}
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

export default connect(mapStateToProps, mapDispatchToProps)(DesktopHeader);