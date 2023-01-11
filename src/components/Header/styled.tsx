import styled, { ThemeProvider } from "styled-components";

const List = styled.ul`
	display: flex;
	justify-content: space-around;
	background-color: #b1b1e4;
	padding: 1rem;
`;

const ListItem = styled.ul`
	font-size: 2em;
	border: 2px solid red;
	padding: 0px 2px 0px 2px;
`;

export { List, ListItem };
