import * as React from "react";

import { Image } from "react-konva";
import { useImg } from "./useImg";

interface URLImageProps {
	src: string;
}

export const URLImage: React.FC<URLImageProps> = ({ src }) => {
	const [img, ready] = useImg(src);
	// we can also use Suspense here lol
	return <Image image={img}></Image>;
};
