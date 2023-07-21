import React from "react";
import { Box, Input, IconButton } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const AddSchedule = () => {
	return (
		<Box
			display={"flex"}
			border={"1px"}
			rounded={"lg"}
			borderColor={"gray.200"}
			_hover={{ borderColor: "gray.300" }}
			focusBorderColor={{ color: "red.400" }}
		>
			<Input placeholder={"Add Schedule"} border={"none"} focusBorderColor="none" />
			<IconButton
				variant={"ghost"}
				fontWeight={"bold"}
				fontSize={"24px"}
				icon={<AiOutlinePlus />}
				_hover={{ color: "blue.500" }}
			/>
		</Box>
	);
};

export default AddSchedule;
