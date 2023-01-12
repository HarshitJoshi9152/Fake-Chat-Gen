import styled from "styled-components";

interface containerProps {
	border?: boolean;
}

export const Container = styled.div<containerProps>`
	margin: 0 auto;
	border: ${({ border }) => (border ? "2px solid #333" : "none")};

	@media screen and (max-width: 576px) {
		/* Mobile devices ? */
		width: 100%;
	}

	@media only screen and (min-width: 768px) {
		/* For desktop: */
		width: 75%;
		padding: 5px 1em;
	}
`;
