import styled from "styled-components"

export const FormWrapper = styled.div`
    max-width: 40rem;
    margin: 0 auto;
`

export const Label = styled.label`
	display: block;
	font-family: var(--ff);
	font-size: var(--fs-sm);
`

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid var(--txt-dark-secondary);
  outline: none;
  padding: 1.2em;
  font-size: var(--fs-sm);
  font-family: var(--ff);

  &:focus {
		outline: 1px solid var(--txt-dark-secondary);
	}
`

export const Select = styled.select`
	display: block;
	width: 100%;
	border: 1px solid var(--txt-dark-secondary);
	outline: none;
	padding: 0.6em;
	font-size: var(--fs-sm);
	font-family: var(--ff);

	&:focus {
		outline: 1px solid var(--txt-dark-secondary);
	}
`

export const TextArea = styled.textarea`
    display: block;
	width: 100%;
	border: 1px solid var(--txt-dark-secondary);
	box-shadow: none;
	outline: none;
	padding: 1.2em;
	font-size: var(--fs-sm);
	font-family: var(--ff);
	resize: none;

	&:focus {
		outline: 1px solid var(--txt-dark-secondary);
	}
`

export const Submit = styled.input`
	cursor: pointer;
	width: 100%;
	display: inline-block;
	font-size: var(--fs-sm);
	font-weight: var(--fw-700);
	letter-spacing: 0.1em;
	text-transform: uppercase;
	text-decoration: none;
	padding: 1em 2em;
	background: var(--clr-accent);
	color: var(--txt-dark);
	border: 1px solid var(--clr-accent);
	transition: all 0.2s linear;
  
	&:hover {
		opacity: 0.8;
	}

	&:focus {
		outline: 1px solid var(--txt-dark-secondary);
	}	
`