import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Img from "react-cool-img";

// to center items in GridAuto
const Flex = styled.div`

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default function Brand(props) {

    const img = `../../images/${props.brand}-logo.svg`
    return (
        <Flex>
            <Link onClick={props.onClick}>
                <Img style={{width: '50%'}} src={img} alt={props.brand} />
            </Link>
        </Flex>
    )
}
