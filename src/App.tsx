import { ThemeProvider } from "styled-components";

// theme for styled-components ThemeProvider
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { Container } from "./styles/Container";

// components
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Editor } from "./components/Editor";

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* Global Document styling like body color, font-family etc */}
			<GlobalStyles />
			<div className="App">
				<Header />
				<Container>
					<SearchBar />
					<Editor />
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;

// todo: add react router + setup Pages setup
