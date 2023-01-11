import { useState } from "react";
import { ThemeProvider } from "styled-components";

// theme for styled-components ThemeProvider
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";

// components
import { Header } from "./components/Header";

function App() {
	const [count, setCount] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			{/* Global Document styling like body color, font-family etc */}
			<GlobalStyles />
			<div className="App">
				<Header></Header>
			</div>
		</ThemeProvider>
	);
}

export default App;
