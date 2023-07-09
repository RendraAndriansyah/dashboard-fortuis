import { Flex, Box, Container } from "@chakra-ui/react";
import React from "react";

const MainLayout = ({ children }) => {
	return (
		<Box display={"flex"} bg={"primary.100"} w={"full"} minH={"100vh"}>
			{children}
		</Box>
	);
};

export default MainLayout;
