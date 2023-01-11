import styled from "styled-components";

interface ListProps {
	padding?: boolean;
}

const List = styled.ul<ListProps>`
	display: flex;
	justify-content: space-around;
	background-color: #b1b1e4;
	/* padding: ${(props) =>
		props.padding ? "1em" : "0"}; // commented just for now ! */
	align-items: center;
`;

const commonStyles = `

border-radius: 0.4em;

&:hover {
	opacity: 65%;
	background-color: #a4a4d4;
	cursor: pointer;
}
`;
const ListItem = styled.li`
	${commonStyles}
	font-size: 1.2em;
	padding: 1em 0.5em; // temp
	margin-left: 1em;
	color: black;
	height: 100%;
`;

const Head = styled.h1`
	${commonStyles}
	font-size: 1.5em;
	padding: 0.7em 0.5em; // temp
	color: #f0f0f0; // this should be a gradient
`;

export { List, ListItem, Head };

// https://blog.agney.dev/styled-components-&-typescript/
// https://jsonformatter.org/json-to-typescript
// https://www.youtube.com/watch?v=Qs1A76JyutU

// hmm i could do this but how would SC handle children ?
// const ListItem = ({href}) => {
// 	return <li>
// 		<a href="#">

// 		</a>
// 	</li>
// }
