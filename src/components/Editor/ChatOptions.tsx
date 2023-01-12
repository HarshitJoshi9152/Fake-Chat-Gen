import React, { useEffect } from "react";
import styled from "styled-components";

interface chatOptionsProps {
	gridarea: string;
}

const StyledChatOptions = styled.div<chatOptionsProps>`
	grid-area: ${(p) => p.gridarea};
	border: 2px solid black;
`;

export const ChatOptions: React.FC<chatOptionsProps> = ({ gridarea }) => {
	useEffect(() => {
		console.log(gridarea);
	}, []);

	return (
		<StyledChatOptions gridarea={gridarea}>
			Hello gridarea
		</StyledChatOptions>
	);
};

// https://stackoverflow.com/questions/52321539/react-passing-props-with-styled-components
