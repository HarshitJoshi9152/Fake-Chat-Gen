export interface Theme {
	colors: Colors;
	fonts: Fonts;
	paddings: Paddings;
	margins: Margins;
}

export interface Colors {
	primary: string;
	secondary: string;
	tertiary: string;
	background: string;
	text: string;
	primaryTextColor: string;
	secondaryTextColor: string;
	inputPlaceholder: string;
	darkGrayText: string;
	darkText: string;
	black: string;
	white: string;
	dark: string;
	medium: string;
	light: string;
	danger: string;
	success: string;
}

export interface Fonts {
	poppins: string;
}

export interface Margins {
	pageTop: string;
}

export interface Paddings {
	container: string;
	pageTop: string;
}

export const theme: Theme = {
	colors: {
		primary: "#FAFAFA",
		secondary: "#FFC80A",
		tertiary: "#303030",
		background: "#ffffff",
		text: "#000000",
		primaryTextColor: "#594F43",
		secondaryTextColor: "#777777",
		inputPlaceholder: "#C7C7C7",
		darkGrayText: "#303030",
		darkText: "#1A1A1A",
		black: "#000000",
		white: "#ffffff",
		dark: "",
		medium: "",
		light: "",
		danger: "",
		success: "#66A15A"
	},
	fonts: {
		poppins: "Sans Serif"
	},
	paddings: {
		container: "15px",
		pageTop: "30px"
	},
	margins: {
		pageTop: "30px"
	}
};
