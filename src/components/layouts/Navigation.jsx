import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CollapseBtn from "../elements/button/CollapseBtn";
import Sidebar from "../fragments/Sidebar";
const Navigation = () => {
	const [collapse, setCollapse] = useState(false);
	const [widthScreen, setWidthScreen] = useState(window.innerWidth);

	useEffect(() => {
		const checkWidth = () => {
			setWidthScreen(window.innerWidth);
		};
		window.addEventListener("resize", checkWidth);
		if (widthScreen < 1280) setCollapse(true);
		return () => {
			window.removeEventListener("resize", checkWidth);
		};
	}, [widthScreen]);

	return (
		<Flex
			w="full"
			maxW={!collapse ? "15%" : "5%"}
			h={"95vh"}
			bg={"primary.100"}
			alignItems={"center"}
			p={2}
			flexDir={"column"}
			justifyContent={"space-between"}
			borderRightRadius={"3xl"}
			m={5}
			textColor={"white"}
			position={"sticky"}
			top={5}
			left={"-moz-initial"}
			transition={"ease-in-out .3s"}
		>
			{/* sidebar */}
			<Sidebar collapse={collapse} />
			<CollapseBtn onClick={() => setCollapse(!collapse)} collapse={collapse} />
		</Flex>
	);
};

export default Navigation;
