import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import NotificationBtn from "../elements/button/NotificationBtn";
import ExportBtn from "../elements/button/ExportBtn";
import Search from "../elements/input/Search";

const HeaderContent = () => {
	return (
		<>
			<Flex justify={"space-between"} h={10}>
				<Text color={"blue.500"} fontSize={"xl"} fontWeight={"bold"}>
					COMPANY NAME
				</Text>
				<Box display={"flex"} gap={4}>
					<NotificationBtn />
					<Search />
				</Box>
			</Flex>
			<Flex pt={4} justify={"space-between"}>
				<Box>
					<Text as={"h3"} fontSize={"3xl"} color={"gray.700"} fontWeight={"semibold"}>
						Welcome back, John
					</Text>
					<Text as={"p"} color={"gray.500"}>
						You're Working at ABC Company
					</Text>
				</Box>
				<ExportBtn />
			</Flex>
		</>
	);
};

export default HeaderContent;
