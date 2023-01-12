import React, { useEffect } from "react";
import styled from "styled-components";

export enum areaname {
	form1 = "ChatOptions1",
	form2 = "ChatOptions2"
}

interface chatOptionsProps {
	gridarea: areaname;
}

const StyledChatOptions = styled.div<chatOptionsProps>`
	grid-area: ${(p) => p.gridarea};
	border: 2px solid black;
`;

export const ChatOptions: React.FC<chatOptionsProps> = ({ gridarea }) => {
	return (
		<StyledChatOptions gridarea={gridarea}>
			Hello gridarea
		</StyledChatOptions>
	);
};

// https://stackoverflow.com/questions/52321539/react-passing-props-with-styled-components
