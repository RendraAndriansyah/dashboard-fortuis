import { Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineUpload } from "react-icons/ai";

const Export = () => {
	return (
		<Button
			leftIcon={<AiOutlineUpload size={22} />}
			variant={"outline"}
			color={"gray.600"}
			size={"sm"}
			py={4}
		>
			Export
		</Button>
	);
};

export default Export;
