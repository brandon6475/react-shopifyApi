import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom';

export const ButtonPrimary = styled(props => <Link {...props} />)`
    cursor: pointer;
    display: inline-block;
    font-size: var(--fs-sm);
    font-weight: var(--fw-700);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 1.33em;
    transition: all 0.2s linear;

    background: var(--clr-accent);
	color: var(--txt-dark);
    border: 1px solid var(--clr-accent);
    
    &:hover {
        opacity: 0.8;
    }
`

export const ButtonSecondary = styled(props => <Link {...props} />)`
    cursor: pointer;
    display: inline-block;
    font-size: var(--fs-sm);
    font-weight: var(--fw-700);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 1.33em;
    transition: all 0.2s linear;

    background: transparent;
	color: var(--clr-accent);
    border: 1px solid var(--clr-accent);
    
    &:hover {
        opacity: 0.8;
    }
`

export const ButtonSecondaryDark = styled(props => <Link {...props} />)`
    cursor: pointer;
    display: inline-block;
    font-size: var(--fs-sm);
    font-weight: var(--fw-700);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 1.33em;
    transition: all 0.2s linear;

    background: transparent;
	color: var(--txt-dark);
    border: 1px solid var(--txt-dark);
    
    &:hover {
        opacity: 0.8;
    }
`