import React, { useEffect } from 'react'

import FormQuote from "../components/forms/formQuote"
import { Section, Container, PageTitle } from "../components/layoutComponents"
import { moveViewToTop } from '../util';

export default function Contact() {

    useEffect(() => {
        moveViewToTop(400)
    }, []);

    return (
        <Section>
            <PageTitle className="center">
                <h2 className="title">request a quote</h2>
                <p>Call us, or send us your part information to receive a quote</p>
            </PageTitle>
            <Container>
                <FormQuote />
            </Container>
        </Section>
    )
}
