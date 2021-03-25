import React from 'react'

import FormContact from "../components/forms/formContact"
import { Section, Container, PageTitle } from "../components/layoutComponents"

export default function contact() {
    return (
        <Section>
            <PageTitle className="center">
                <h2 className="title">contact us</h2>
            </PageTitle>
            <Container>
                <FormContact />
            </Container>
        </Section>
    )
}
