import React from "react";
import { ButtonGroup, IconButton, Text } from "@chakra-ui/react";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
const DateAttandanceBtn = () => {
	return (
		<ButtonGroup size="sm" variant="solid" alignItems={"center"}>
			<IconButton
				rounded={"full"}
				icon={<ArrowBackIcon boxSize={6} rounded={"full"} />}
			/>
			<Text fontWeight={"medium"}>Tue, 16 August 23</Text>
			<IconButton rounded={"full"} icon={<ArrowForwardIcon boxSize={6} />} />
		</ButtonGroup>
	);
};

export default DateAttandanceBtn;
