import React from 'react'
import styled from "styled-components"

const Form = styled.form`
    display: flex;
`

const Input = styled.input`
	display: block;
	width: 100%;
	border: 1px solid var(--txt-dark-secondary);
	outline: none;
	padding: 1.2em 0 1.2em 1.2em;
	font-size: var(--fs-sm);
	color: var(--txt-dark);
	font-family: var(--ff);

	&:focus {
		outline: 1px solid var(--txt-dark-secondary);
	}
`

// using different style setting for search icon
const Submit = styled.input`
	cursor: pointer;
	display: inline-block;
	font-size: 1.8em;
	font-weight: var(--fw-700);
	letter-spacing: 0.1em;
	text-transform: uppercase;
	text-decoration: none;
	background: var(--clr-accent);
	color: var(--txt-dark);
	border: 1px solid var(--txt-dark-secondary);
	border-left: none;

	&:focus {
		outline: 1px solid var(--txt-dark-secondary);
	}
`

export default function Search(props) {
    return (
        <div>
            <Form action="#" method="#">
                <Input 
					type="text" 
					name="search" 
					id="search" 
					placeholder="Search Part Name or Number" 
					onKeyDown={props.handleSubmit}
					value={props.value} onChange={e => props.onChange(e.target.value)} />
				<Submit type='submit' onClick={props.handleSubmit} value="&#x2315;" />
				{/* submit search should navigate to page layout of: /searchresults */}
            </Form>
        </div>
    )
}
