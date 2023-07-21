import { Box, Link as LinkChakra, ListIcon, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import activePath from "../../services/utils/activePath";

export const MenuItem = ({ item, collapse }) => {
	const { label, path, icon } = item;

	return (
		<Box my={6}>
			<LinkChakra
				display={"flex"}
				as={NavLink}
				to={path}
				gap={1}
				_hover={{ textDecoration: "none", color: "white" }}
				fontWeight="medium"
				color={path === activePath() ? "white" : "gray.400"}
				w="full"
				justifyContent={collapse ? "center" : ""}
			>
				<ListIcon as={icon} fontSize={28} m="0" />
				{!collapse && <Text alignSelf={"center"}>{label}</Text>}
			</LinkChakra>
		</Box>
	);
};
