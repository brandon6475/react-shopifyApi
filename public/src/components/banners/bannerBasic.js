import React from "react"
import { Link } from 'react-router-dom';
import styled from "styled-components"

import { Container } from "../layoutComponents"

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
`

const BannerText = styled.div`
  text-align: center;
  max-width: 70ch;
  margin: 0 auto;

  h1, h2, h3 {
      line-height: 1.1;
  }
`

export default function Banner (props) {
  return (
      <BannerWrapper img={props.img}>
        <Container>
          <BannerText className="spacing">
              <h2 className="title">{props.title}</h2>
              <p>{props.description}</p>         
          </BannerText>
        </Container>
      </BannerWrapper>
  )
}
