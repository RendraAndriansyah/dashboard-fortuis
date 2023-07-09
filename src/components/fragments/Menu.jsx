import { List, ListItem } from "@chakra-ui/react";
import React from "react";

import { BiCalendar, BiCalendarCheck, BiHomeAlt } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { PiUsersThreeBold } from "react-icons/pi";
import { MenuItem } from "./MenuItem";

const items = [
	{
		id: 1,

		label: "Home",
		icon: BiHomeAlt,
		path: "/",
	},
	{
		id: 2,

		label: "Attendance",
		icon: BiCalendarCheck,
		path: "/attendance",
	},
	{
		label: "Leave",
		icon: BiCalendar,
		path: "/*",
	},
	{
		label: "Employees",
		icon: PiUsersThreeBold,
		path: "/*",
	},
	{
		label: "Payroll",
		icon: FaRegMoneyBill1,
		path: "/*",
	},

	{
		label: "Schedule",
		icon: BsClock,
		path: "/*",
	},
];

const Menu = ({ collapse }) => {
	return (
		<List w="full" my={6}>
			{items.map((item, i) => (
				<ListItem key={i}>
					<MenuItem item={item} collapse={collapse} />
				</ListItem>
			))}
		</List>
	);
};

export default Menu;
