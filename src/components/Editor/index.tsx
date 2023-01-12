import React, { useState } from "react";

import { TemplateArea, EditorGrid } from "./styled";
import { View } from "./View";
import { ChatOptions } from "./chatOptions";

export const Editor: React.FC<{}> = () => {
	// get template_name and the form !
	const [templateName, setTemplateName] = useState("Basic Whatsapp Template");

	return (
		<TemplateArea>
			<h1>{templateName}</h1>
			<EditorGrid>
				<ChatOptions gridarea="ChatOptions1" />
				<View />
				<ChatOptions gridarea="ChatOptions2" />
			</EditorGrid>
		</TemplateArea>
	);
};
