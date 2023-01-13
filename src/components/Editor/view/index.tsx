import React, { useEffect, useRef, useState } from "react";

import { Stage, Layer, Rect } from "react-konva";

interface Idimensions {
	width: number;
	height: number;
}

export const View: React.FC = () => {
	const divRef = useRef<null | HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState<Idimensions>({
		width: 0,
		height: 0
	});

	// We cannot set the h & w on Stage to 100% it only takes px values so we have to
	// find the parent container's w and h and then manually set those !
	useEffect(() => {
		if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
			setDimensions({
				width: divRef.current.offsetWidth,
				height: divRef.current.offsetHeight
			});
		}
	}, []);

	return (
		<div style={{ gridArea: "view" }} ref={divRef}>
			<Stage width={dimensions.width} height={dimensions.height}>
				<Layer>
					<Rect
						fill="red"
						x={0}
						y={0}
						width={150}
						height={150}
					></Rect>
				</Layer>
			</Stage>
		</div>
	);
};
