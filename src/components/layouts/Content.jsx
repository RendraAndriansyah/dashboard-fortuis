import { Box } from "@chakra-ui/react";
import React from "react";

const Content = ({ children }) => {
	return (
		<Box w={"full"} bg={"white"} rounded={"2xl"} p={5} m={5}>
			{children}
		</Box>
	);
};

export default Content;
