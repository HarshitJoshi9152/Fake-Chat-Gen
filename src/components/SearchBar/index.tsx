import * as React from "react";

// styled
import { Search, SearchContainer } from "./search";

export const SearchBar: React.FC<{}> = (props) => {
	return (
		<SearchContainer>
			<Search name="search" placeholder="Browse all templates" />
			{/* add starred templates button and most used services drop down menu with conversations */}
		</SearchContainer>
	);
};
// 17:50
