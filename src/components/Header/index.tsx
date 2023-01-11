import React from "react";
import { List, ListItem, Head } from "./styled";

export const Header: React.FC<{}> = () => {
	return (
		<List padding={true}>
			<Head>FakeChatGen logo</Head>
			<List>
				<ListItem>
					<a href="#">Dark Mode switch</a>
				</ListItem>
				<ListItem>
					<a href="#">Github</a>
				</ListItem>
				<ListItem>
					<a href="#">Kohi</a>
				</ListItem>
				<ListItem>
					<a href="#">Login/Profile</a>
				</ListItem>
			</List>
		</List>
	);
};
