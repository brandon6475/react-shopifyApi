import styled from "styled-components"

export const CardWrapper = styled.article`
    border: 1px solid var(--txt-dark-secondary);
`

export const CardImg = styled.img`
    height: 140px;
    width: 100%;
    object-fit: contain;
`

export const CardText = styled.div`
    padding: 0.8em;
    text-transform: capitalize;
`

export const ImgContainer = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 77%;
    opacity: 0.4;
`
