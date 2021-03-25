import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { moveViewToTop } from '../util'

import { Company } from "./company"
import { Container, Flex } from "./layoutComponents"

const device = {
    sm: "28em"
}

const FooterWrapper = styled.footer`
    padding: 7em 0;
    background: var(--clr-dark);
    color: var(--txt-light);

    @media screen and (max-width: 450px) {
        padding: 4em 0;
    }
`

const LogoContainer = styled.div`
    display: grid;
    place-items: center;
`

const FlexItem = styled.div`
    ul {
        list-style-type: none;
        padding: 0;
        margin: var(--spacer) 0;

        li {
            a {
                text-transform: capitalize;
                color: var(--txt-light);
                font-weight: var(--fw-500);
            }
        }
    }
`

const Copyright = styled.div`
    font-size: 12px;

    ul {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        list-style-type: none;

        @media screen and (max-width: ${device.sm}) {
            flex-direction: column;
        }

        & > * + * {
            margin-left: 2em;

            @media screen and (max-width: ${device.sm}) {
            margin-left: 0;
            }
        }

        li {
            a {
                text-transform: capitalize;
                color: var(--txt-light);
                font-weight: var(--fw-500);   
            }
        }
    }
`

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    text-transform: capitalize;
    color: var(--txt-light);
    font-weight: var(--fw-500);

    &:hover, &:focus {
        cursor: pointer;
        opacity: 0.7;
    }
`

export default function Footer() {
    return (
        <FooterWrapper>
            <Container className="spacing-lg">
                <LogoContainer>
                    <img src="../../images/logo.svg" alt="Tractor1 logo" />
                </LogoContainer>
                <hr />
                <Flex>
                    <FlexItem className="spacing">
                        <h2 className="heading">support</h2>
                        <ul>
                            <li className="italics">Headquarters:</li>
                            <li>{Company.street1}</li>
                            <li>{Company.city1}</li>
                            <li>USA</li>
                        </ul>
                        <ul>
                            <li><a href="mailto: cgrimm@tractor1.com">{Company.mail1}</a></li>
                            <li><a href="mailto: tlasage@tractor1.com">{Company.mail2}</a></li>
                            <li><a href="mailto: cpalframan@tractor1.com">{Company.mail3}</a></li>
                        </ul>
                        <ul>
                            <li><a href="tel: 877-358-2583">{Company.tel1}</a></li>
                        </ul>
                    </FlexItem>
                    <FlexItem>
                        <h2 className="heading">pages</h2>
                        <ul>
                            <li><StyledLink onClick={moveViewToTop} to="/">home</StyledLink></li>
                            <li><StyledLink onClick={() => moveViewToTop(400)} to="/categories/undercarriage">undercarriage parts</StyledLink></li>
                            <li><StyledLink onClick={moveViewToTop} to="/brands">brands</StyledLink></li>
                            <li><StyledLink onClick={moveViewToTop} to="/category/clearance">clearance</StyledLink></li>
                            <li><StyledLink onClick={moveViewToTop} to="/contact">contact</StyledLink></li>
                        </ul>
                    </FlexItem>
                    <FlexItem>
                        <h2 className="heading">resources</h2>
                        <ul>
                            <li><a href={Company.vtrack} target="_popup">vtrack catalog</a></li>
                        </ul>
                    </FlexItem>
                </Flex>
                <hr />
                <Copyright>
                    <ul>
                        <li>Copyright&#169; 2021</li>
                        <li>{Company.name}</li>
                        <li>All Rights Reserved</li>
                    </ul>
                    <ul>
                        {/* <li><a href="#">Terms of use</a></li> */}
                        {/* <li><a href="#">Privacy Policy</a></li> */}
                    </ul>
                </Copyright>
                <hr />
            </Container>
        </FooterWrapper>
    )
}
