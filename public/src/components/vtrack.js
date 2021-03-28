import React from 'react'
import styled from "styled-components"

import { Section, Container, Flex, Actions } from "./layoutComponents"
import { ButtonSecondaryDark } from "./buttons"
import { Company } from "./company"
import Img from "react-cool-img";

const LinkWrapper = styled.a`
    text-decoration: none;
    color: var(--txt-dark);
    outline: none;
`

const FlexItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: 50%;
        align-self: center;
    }

    ul {
        padding: 0;
        margin: var(--spacer);
        list-style-type: none;

        li:before {
            content: '✓';
            font-size: 24px;
            margin-right: 0.8rem;
        }
    }
`

export default function Vtrack() {
    return (
        <LinkWrapper href={Company.vtrack} target="_popup">
            <Section>
                <Container>
                    <Flex>
                        <FlexItem>
                            <Img src="../images/vtrack-logo.svg" alt="Vtrack logo"/>
                        </FlexItem>
                        <FlexItem>
                            <h2 className="heading">visit the undercarriage catalog</h2>
                            <ul>
                                <li>13,000 part numbers</li>
                                <li>7,400 machines</li>
                                <li>Tractor1 exclusive selling rights</li>
                            </ul>
                            <Actions>
                                <ButtonSecondaryDark>visit the catalog</ButtonSecondaryDark>
                            </Actions>
                        </FlexItem>
                    </Flex>
                </Container>
            </Section>
        </LinkWrapper>
    )
}
