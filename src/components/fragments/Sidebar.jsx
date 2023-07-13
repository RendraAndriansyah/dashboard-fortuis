import { Box } from "@chakra-ui/react";
import React from "react";
import Account from "./Account";
import Logo from "./Logo";
import Menu from "./Menu";

const Sidebar = ({ collapse }) => {
	return (
		<>
			<Box w="full">
				{/*Logo  */}
				<Logo collapse={collapse} />
				{/* menu */}
				<Menu collapse={collapse} />
			</Box>
			{/* Account */}

			<Account collapse={collapse} />
		</>
	);
};

export default Sidebar;
