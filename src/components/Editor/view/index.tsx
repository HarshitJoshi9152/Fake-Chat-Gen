import React, { useEffect, useRef, useState } from "react";

import { Stage, Layer, Image } from "react-konva";
import { useImg } from "./useImg";
import { URLImage } from "./URLImage";

interface Idimensions {
	width: number;
	height: number;
}

export const View: React.FC = () => {
	const divRef = useRef<null | HTMLDivElement>(null);
	const [img, ready] = useImg("http://placebeard.it/250/250");
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
					{/* Notification Bar */}
					{/* Application */}
					{/* Buttons? */}
					<Image image={ready ? img : undefined}></Image>
					<URLImage src="http://placebeard.it/500/500" />
					{/* <URLImage></URLImage> */}
				</Layer>
			</Stage>
		</div>
	);
};

// https://konvajs.org/docs/react/Canvas_Export.html
