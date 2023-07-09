import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import CollapseBtn from "../elements/button/CollapseBtn";
import Sidebar from "../fragments/Sidebar";

const Navigation = () => {
	const [collapse, setCollapse] = useState(false);
	return (
		<Flex
			w="full"
			maxW={!collapse ? "15%" : "5%"}
			bg={"primary.100"}
			alignItems={"center"}
			p={2}
			flexDir={"column"}
			justifyContent={"space-between"}
			borderRightRadius={"3xl"}
			m={5}
			textColor={"white"}
			position={"sticky"}
			top={0}
			transition={"ease-in-out .3s"}
		>
			{/* sidebar */}
			<Sidebar collapse={collapse} />
			<CollapseBtn onClick={() => setCollapse(!collapse)} collapse={collapse} />
		</Flex>
	);
};

export default Navigation;
