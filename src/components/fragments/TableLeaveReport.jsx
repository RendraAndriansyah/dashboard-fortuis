import { Center, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

import DateAttandanceBtn from "../elements/button/DateAttandanceBtn";
import ListLeaveReport from "./TableListUser";

const customScroll = {
	"&::-webkit-scrollbar": {
		width: "8px",
	},
	"&::-webkit-scrollbar-track": {
		width: "2px",
	},
	"&::-webkit-scrollbar-thumb": {
		background: "#D5E0FD",
		borderRadius: "24px",
	},
};

const TableLeaveReport = () => {
	return (
		<>
			<Center pb={3}>
				<DateAttandanceBtn />
			</Center>
			<TableContainer maxH={"45dvh"} overflowY={"auto"} css={customScroll}>
				<Table size={"sm"} variant="simple">
					<Thead bg={"gray.100"} position={"sticky"} top={0} zIndex={2}>
						<Tr fontSize={"3xs"}>
							<Th>Employee Name</Th>
							<Th>Type of leave</Th>
							<Th>total Days</Th>
						</Tr>
					</Thead>
					<Tbody fontSize={"md"}>
						<ListLeaveReport />
						<ListLeaveReport />
						<ListLeaveReport />
						<ListLeaveReport />
						<ListLeaveReport />
						<ListLeaveReport />
						<ListLeaveReport />
						<ListLeaveReport />
						<ListLeaveReport />
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default TableLeaveReport;
