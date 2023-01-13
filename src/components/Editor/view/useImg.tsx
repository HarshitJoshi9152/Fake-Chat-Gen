import * as React from "react";
import { useState } from "react";

export const useImg = (src: string): [HTMLImageElement, Boolean] => {
	const [ready, setReady] = useState<Boolean>(false);
	const [img, setImg] = React.useState<HTMLImageElement>(() => {
		const img = document.createElement("img");
		img.src = src;

		img.onload = () => {
			console.log("loaded");
			setReady(true);
		};

		img.oncancel =
			img.onabort =
			img.ondrop =
			img.onerror =
				(e) => {
					console.log(
						`Couldn't load img ${src} - error type : ${
							(e as Event).type
						}`
					);
					// console.log(e);
					setReady(false);
				};

		return img;
	});

	// if (src == url.current) return [img.current, false];
	// url.current = src;

	return [img, ready];
};
