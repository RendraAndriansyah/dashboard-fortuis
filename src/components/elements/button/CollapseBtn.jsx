import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CollapseBtn = ({ onClick, collapse }) => {
	return (
		<IconButton
			aria-label="Menu Collapse"
			icon={
				collapse ? (
					<FiChevronRight color="#a0aec0" size="2em" />
				) : (
					<FiChevronLeft color="#a0aec0" size="2em" />
				)
			}
			_hover={{ bg: "blue.900" }}
			size={"lg"}
			colorScheme="primary.100"
			bg={"primary.100"}
			position={"absolute"}
			onClick={onClick}
			bottom={"50%"}
			right={"-50px"}
			borderRadius={"full"}
			borderColor={"gray.100"}
			transition={"ease-in-out .3s"}
		/>
	);
};

export default CollapseBtn;
