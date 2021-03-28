import React from 'react'
import styled from "styled-components"

import { Label, Select } from "./formItems"

const Form = styled.form`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`

export default function Filter(props) {
    return (
        <div>
            <Form action="#" method="#">
                <Label htmlFor="select" >{props.label}</Label>
                <Select name="select" onChange={e => props.onChange(e.target.value)} value={props.value}>
                    <option value={''} >---</option>
                    {props.options && props.options.map(option =>  <option value={option.value} key={option.value} >{option.label}</option> )}
                </Select>
            </Form>
        </div>
    )
}
