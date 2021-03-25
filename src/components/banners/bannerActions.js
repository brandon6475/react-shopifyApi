import React from "react"
import styled from "styled-components"

import { Container, Actions } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--txt-light);
  background: ${props => `url(${props.img})`}, var(--clr-overlay);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6em 0;
  margin-top: 7em;

@media screen and (max-width: 450px) {
    margin-top: 4em;
}
`

const BannerText = styled.div`
  text-align: center;
  max-width: 70ch;
  width: 100%;
  margin: 0 auto;

    h1, h2, h3 {
        line-height: 1.1;
        text-transform: capitalize;
    }
`

export default function BannerActions (props) {
  return (
      <BannerWrapper img={props.img}>
        <Container className="spacing">
          <BannerText className="spacing">
            <h2 className="title--bold italics">{props.title}</h2>
            <p>{props.description}</p>
            <Actions>
              <ButtonPrimary to={props.toPrimary}>{props.buttonPrimary}</ButtonPrimary>
            </Actions>     
          </BannerText>
        </Container>
      </BannerWrapper>
  )
}
