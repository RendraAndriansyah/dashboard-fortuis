import React from "react";
import { Button } from "@chakra-ui/react";
const MenuCalendarBtn = ({ label }) => {
	return (
		<Button
			variant={"unstyled"}
			fontWeight={"medium"}
			color={"gray.500"}
			_hover={{ color: "gray.700" }}
		>
			{label}
		</Button>
	);
};

export default MenuCalendarBtn;
