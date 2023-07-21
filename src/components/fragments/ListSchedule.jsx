import React from "react";
import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { BiPencil, BiTrash } from "react-icons/bi";
const ListSchedule = () => {
	return (
		<Box>
			<Box border={"1px"} borderColor={"gray.300"} rounded={"md"}>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Text fontWeight={"medium"} pl={3}>
						7:30am - 3.25pm
					</Text>
					<Box>
						<IconButton
							fontSize={"22px"}
							color={"gray.500"}
							icon={<BiPencil />}
							variant={"ghost"}
							_hover={{ color: "yellow.500" }}
						/>
						<IconButton
							fontSize={"22px"}
							color={"gray.500"}
							icon={<BiTrash />}
							variant={"ghost"}
							_hover={{ color: "red.500" }}
						/>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default ListSchedule;
