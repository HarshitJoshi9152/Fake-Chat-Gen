import styled from "styled-components";

export const TemplateArea = styled.div`
	margin-top: 1.2em;
	text-align: center;
	height: minmax(85vh, 700px);
	/* color: #27ae60; */
`;

export const EditorGrid = styled.div`
	margin-top: 1.2em;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(2, 1fr);
	gap: 0px;
	height: 90vh;
	grid-template-areas:
		"view ChatOptions1"
		"view ChatOptions2";
`;
