import { Button, Icon } from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";
import React from "react";

const Notification = () => {
	return (
		<Button variant={"outline"} boxSize={10}>
			<Icon boxSize={6} as={AiOutlineBell} color={"gray.400"} />
		</Button>
	);
};

export default Notification;
