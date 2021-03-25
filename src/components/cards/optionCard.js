import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Img from "react-cool-img";

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1em 1fr 1em;
    grid-template-rows: auto 2em auto;
    
    img {
        grid-row: 1 / span 2;
        grid-column: 1 / -1;

        height: 400px;
        width: 100%;
        object-fit: cover;
    }
`

const Text = styled.div`
    grid-row: 2 / span 2;
    grid-column: 2 / 3;
    padding: 1em;
    text-align: center;
    background: var(--clr-dark);
    border: 2px solid var(--clr-accent);
`

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    color: var(--clr-accent);
`

export default function OptionCard(props) {
    return (
        <StyledLink to={props.to} onClick={props.onClick}>
            <GridWrapper>
                <Img src={props.img} alt="undercarriage type"/>
                <Text>
                    <p className="body--large">{props.title}</p>
                </Text>
            </GridWrapper>
        </StyledLink>
    )
}
