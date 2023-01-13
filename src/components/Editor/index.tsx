import React, { useState } from "react";

import { TemplateArea, EditorGrid } from "./containers";
import { View } from "./view";
import { ChatOptions, areaname } from "./ChatOptions";

export const Editor: React.FC<{}> = () => {
	// get template_name and the form !
	const [templateName, setTemplateName] = useState("Basic Whatsapp Template");

	return (
		<TemplateArea>
			<h1>{templateName}</h1>
			<EditorGrid>
				<View />
				<ChatOptions gridarea={areaname.form1} />
				<ChatOptions gridarea={areaname.form2} />
			</EditorGrid>
		</TemplateArea>
	);
};
