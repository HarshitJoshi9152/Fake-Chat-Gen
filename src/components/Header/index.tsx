import React, { useState } from "react";
import { List, ListItem } from "./styled";

export const Header: React.FC<{}> = () => {
	const [clicks, setClicks] = useState(0);

	return (
		<header>
			<List>
				<ListItem>FakeChatGen</ListItem>
				<ListItem>logo</ListItem>
			</List>
		</header>
	);
};
