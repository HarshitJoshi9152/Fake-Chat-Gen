import styled from "styled-components";

export const TemplateArea = styled.div`
	margin-top: 1.2em;
	text-align: center;
	/* color: #27ae60; */
`;

export const EditorGrid = styled.div`
	margin-top: 1.2em;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas: "ChatOptions1 view ChatOptions2";
`;
