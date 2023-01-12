import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface viewProps {
	color?: String;
}

const [WIDTH, HEIGHT] = [600, 600];

const canvas: React.FC<viewProps> = ({ color = "#27ae60" }) => {
	const canvasRef = useRef<null | HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		const context = canvasRef.current.getContext("2d");
		if (context) {
			context.strokeStyle = color as string; // any other way to deal with this without having to use "as string"
			context.strokeRect(0, 0, WIDTH, HEIGHT);
			console.log(context);
		}
	}, []);

	return <canvas ref={canvasRef}>Canvas is not supported !</canvas>;
};

export const View = styled(canvas)`
	grid-area: "view";
	border: 2px solid black;
	width: ${WIDTH}px;
	height: ${HEIGHT}px;
`;
