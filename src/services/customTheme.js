import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		primary: {
			100: "#131528",
		},
	},
	fonts: {
		heading: `Plus Jakarta Sans, Open Sans, sans-serif,`,
		body: `Plus Jakarta Sans, sans-serif, `,
	},
});

export default theme;
