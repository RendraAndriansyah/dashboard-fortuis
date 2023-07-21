import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MenuCalendarBtn from "../elements/button/MenuCalendarBtn";
const MenuCalendar = () => {
	return (
		<Box border={"1px"} rounded={"md"} py={1} px={2} borderColor={"gray.300"} mt={4}>
			<Flex gap={3}>
				<MenuCalendarBtn label={"Monthly"} />
				<MenuCalendarBtn label={"Biweekly"} />
				<MenuCalendarBtn label={"Weekly"} />
				<MenuCalendarBtn label={"Daily"} />
			</Flex>
		</Box>
	);
};

export default MenuCalendar;
