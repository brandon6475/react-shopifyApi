import styled from "styled-components"

//////// ===================
// Table of Contents
//////// ===================
// 1. device 
// 2. Section
// 3. Container
// 4. Actions
// 5. Flex
// 6. Grid
//////// ===================
//////// ===================


const device = {
	md: "48em"
}

export const Section = styled.section`
    padding: 7em 0;

    @media screen and (max-width: 450px) {
        padding: 4em 0;
    }
`

export const Container = styled.div`
    width: 85%;
	margin: 0 auto;
	max-width: 65rem;
`

export const PageTitle = styled.div`
	background: var(--clr-dark);
    color: var(--clr-accent);
    padding: 2em 0;
    margin-bottom: var(--spacer); 
`

export const Actions = styled.div`
    display: flex;
    
	& > * {
		width: 100%;
		text-align: center;
    }
    
    & > * + * {
		margin-left: 10px;
    }
    
    @media screen and (max-width: 37.5em) {
		flex-direction: column;
		text-align: center;
		& > * {
			width: 100%;
		}

		& > * + * {
			margin-left: 0;
			margin-top: var(--spacer);
		}
	}
`

export const ActionsStacked = styled.div`
	display: flex;
	flex-direction: column;

	& > * {
		width: 100%;
		text-align: center;
	}

	& > * + *  {
		margin-top: var(--spacer);
	}
`

export const Flex = styled.div`
	display: flex;

	@media screen and (max-width: ${device.md}) {
		flex-direction: column;
	}

	& > * {
		width: 100%;
	}

	& > * + * {
		margin-left: 2em;

		@media screen and (max-width: ${device.md}) {
			margin-left: 0;
			margin-top: var(--spacer);
		}
	}
`

export const GridTwo = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2em;

	@media screen and (max-width: ${device.md}) {
		grid-template-columns: 1fr;
	}

`

export const GridThree = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;

	@media screen and (max-width: ${device.md}) {
		grid-template-columns: 1fr;
	}
`

export const GridAuto = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
	grid-gap: 2em;
    
    & > * {
        justify-self: center;
        align-self: center;
    }
`