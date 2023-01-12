import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface viewProps {
	color?: String;
}

const [WIDTH, HEIGHT] = [300, 400];

const Canvas = styled.canvas`
	grid-area: view;
	border: 2px solid black;
	width: 100%;
	height: 100%;
`;

export const View: React.FC<viewProps> = ({ color = "#27ae60" }) => {
	const canvasRef = useRef<null | HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		const context = canvasRef.current.getContext("2d");
		if (context) {
			context.strokeStyle = color as string; // any other way to deal with this without having to use "as string"
			// const w = canvasRef.current.width;
			// const h = canvasRef.current.height;
			// context.fillRect(0, 0, w, h);
			context.font = "20px Sans Serif";
			context.fillText("This is a Canvas !", 30, 40);
			console.log(context);
		}
	}, []);

	return <Canvas ref={canvasRef}>Canvas is not supported !</Canvas>;
};
