import {
	ButtonGroup,
	Center,
	IconButton,
	TableContainer,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
	Tfoot,
} from "@chakra-ui/react";
import React from "react";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import listLeaveReport from "./TableListUser";
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
				<ButtonGroup size="sm" variant="solid" alignItems={"center"}>
					<IconButton
						rounded={"full"}
						icon={<ArrowBackIcon boxSize={6} rounded={"full"} />}
					/>
					<Text fontWeight={"medium"}>Tue, 16 August 23</Text>
					<IconButton rounded={"full"} icon={<ArrowForwardIcon boxSize={6} />} />
				</ButtonGroup>
			</Center>
			<TableContainer maxH={"35vh"} overflowY={"auto"} css={customScroll}>
				<Table height={20}>
					<Thead bg={"gray.100"} position={"sticky"} top={0} zIndex={2}>
						<Tr>
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
