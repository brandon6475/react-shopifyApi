import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"

import { Device } from "./headerItems"
import { Container } from "../layoutComponents"
import Search from "../forms/search"
import Filter from "../forms/filter"

import { AiFillCaretDown } from 'react-icons/ai';
import { FaShoppingCart, FaPhoneAlt } from 'react-icons/fa';

const Header = styled.header`
    @media screen and (min-width: ${Device.md}) {
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

const Nav = styled.nav``

const NavList = styled.ul`
    display: ${({nav}) => (nav ? "block" : "none")};
    padding: 0;
    margin: 0;
    list-style-type: none;
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
            transform: ${({nav}) => (nav ? "rotate(-45deg) translate(-6px, 5px)" : "" )} ;
        }
        :nth-child(2){
            opacity: ${({nav}) => (nav ? "0" : "" )} ;
        }
        :nth-child(3){
            transform: ${({nav}) => (nav ? "rotate(45deg) translate(-6px, -5px)" : "" )} ;
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

export default function Test() {
    const [nav, navOpen] = useState(false);

    function toggleMenu() {
        navOpen(!nav);
    }

    return (
        <>
            <Header>
                <Container className="spacing">
                    <HeaderWrapper className="spacing">
                        <LogoContainer>
                            <img src="../../../images/logo.png" alt="Tractor1 logo"/>
                        </LogoContainer>
                        <Nav>
                            <Burger nav={nav} onClick={toggleMenu}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </Burger>
                            <NavList nav={nav}>
                                <div>
                                    <li><StyledLink><FaPhoneAlt />1-888-888-8888</StyledLink></li>
                                </div>
                                <div>
                                    <li><StyledLink>undercarriage parts <AiFillCaretDown /></StyledLink></li>
                                    <li><StyledLink>brands <AiFillCaretDown /></StyledLink></li>
                                    <li><StyledLink>clearance</StyledLink></li>
                                </div>
                                <div>
                                    <li><StyledLink>contact</StyledLink></li>
                                    <li><StyledLink><FaShoppingCart />cart</StyledLink></li>
                                </div>
                            </NavList>
                        </Nav>
                    </HeaderWrapper>
                    <QueryWrapper className="spacing">
                        <Search />
                        <FilterWrapper>
                            <Filter 
                                label="Select Brand"
                            />
                            <Filter 
                                label="Select Model"
                            />
                        </FilterWrapper>
                    </QueryWrapper>
                </Container>
            </Header>
        </>
    )
}
