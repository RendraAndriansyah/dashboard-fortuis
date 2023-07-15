import { Box, Link as LinkChakra, ListIcon, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const MenuItem = ({ item, collapse }) => {
	const { label } = item;
	const { path } = item;
	const { icon } = item;
	const isActive = window.location.pathname;

	return (
		<Box my={6}>
			<LinkChakra
				display={"flex"}
				as={NavLink}
				to={path}
				gap={1}
				_hover={{ textDecoration: "none", color: "white" }}
				fontWeight="medium"
				color={path === isActive ? "white" : "gray.400"}
				w="full"
				justifyContent={collapse ? "center" : ""}
			>
				<ListIcon as={icon} fontSize={28} m="0" />
				{!collapse && <Text alignSelf={"center"}>{label}</Text>}
			</LinkChakra>
		</Box>
	);
};
