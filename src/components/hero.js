import React from 'react'
import styled from "styled-components"

import { Section, Container, GridThree } from "./layoutComponents"
import OptionCard from "./cards/optionCard"
import { moveViewToTop } from '../util'

const HeroWrapper = styled.section`
    display: grid;
    grid-template-rows: auto 200px auto;
`
const Bg = styled.div`
    grid-column: 1 / -1;
    grid-row: 1 / span 2;
    background-color: var(--clr-dark);
    width: 100%;
    height: 100%;
    z-index: -1000;
`

const Top = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    color: var(--txt-light);
    padding: 4em 0;

    h1, h2, h3, p {
        max-width: 70ch;
        width: 100%;
    }
`

const Bottom = styled.div`
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    z-index: 1000;
`

export default function Hero() {
    return (
        <Section>
            <HeroWrapper>
                <Bg />
                <Top>
                    <Container className="spacing">
                        <h2 className="title">We sell undercarriage parts for Excavators, Track Loaders, Skid Steers, and more.</h2>
                        <p>We have over 40 years of industry exprience and use this knowledge to source our products from many high quality suppliers.</p>
                    </Container>
                </Top>
                <Bottom>
                    <Container>
                        <GridThree>
                            <OptionCard
                                onClick={() => moveViewToTop(400)}
                                to="/categories/undercarriage"
                                img="../../images/undercarriage.png"
                                title="undercarriage"
                            />
                            <OptionCard
                                onClick={() => moveViewToTop(1200)}
                                img="../../images/rubber-tracks.png"
                                title="tracks"
                            />
                            <OptionCard
                                onClick={moveViewToTop}
                                to="/category/clearance"
                                img="../../images/clearance.png"
                                title="clearance"
                            />
                        </GridThree>
                    </Container>
                </Bottom>
            </HeroWrapper>
        </Section>
    )
}
