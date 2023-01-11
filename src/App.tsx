import { ThemeProvider } from "styled-components";

// theme for styled-components ThemeProvider
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";

// components
import { Header } from "./components/Header";

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* Global Document styling like body color, font-family etc */}
			<GlobalStyles />
			<div className="App">
				<Header />
			</div>
		</ThemeProvider>
	);
}

export default App;

// todo: add react router + setup Pages setup
