import React, { useState } from "react";

import { EditorContainer } from "./styled";

export const Editor: React.FC<{}> = () => {
	// get template_name and the form !
	const [templateName, setTemplateName] = useState("Basic Whatsapp Template");

	return (
		<EditorContainer>
			<h1>{templateName}</h1>
		</EditorContainer>
	);
};
