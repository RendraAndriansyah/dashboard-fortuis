import React from "react";
import { Tr, Td, Flex, Avatar, Box, Text } from "@chakra-ui/react";
const ListLeaveReport = () => {
	return (
		<Tr>
			<Td>
				<Flex alignItems={"center"} gap={1}>
					<Avatar src="https://bit.ly/dan-abramov" size={"sm"} />
					<Text as={"span"}>Rendra Andriansyah</Text>
				</Flex>
			</Td>
			<Td>
				<Box display={"inline-block"} w={3} h={3} bg={"purple.500"} />
				<Text as={"span"} pl={1}>
					Medical Leave
				</Text>
			</Td>
			<Td>20</Td>
		</Tr>
	);
};

export default ListLeaveReport;
