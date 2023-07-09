import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";
const index = () => {
	return (
		<InputGroup w={[100, 200, 300]}>
			<InputLeftElement pointerEvents="none">
				<Search2Icon color="gray.300" />
			</InputLeftElement>
			<Input type="text" placeholder="Search" />
		</InputGroup>
	);
};

export default index;
