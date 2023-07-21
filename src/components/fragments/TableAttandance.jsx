import React from "react";
import {
	IconButton,
	Table,
	TableContainer,
	Tbody,
	Th,
	Thead,
	Tr,
	Flex,
} from "@chakra-ui/react";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import ListAttandance from "./ListAttandance";

const TableAttandance = ({ data }) => {
	return (
		<TableContainer border={"1px"} rounded={"lg"} borderColor={"gray.400"}>
			<Table>
				<Thead bg={"blue.50"}>
					<Tr>
						<Th colSpan={1} rowSpan={2} borderRight={"1px"} borderColor={"gray.400"}>
							<Flex alignItems={"center"} justifyContent={"space-between"}>
								Employee Name
								<IconButton
									icon={<HiOutlineChevronUpDown size={24} />}
									variant={"unstyled"}
								></IconButton>
							</Flex>
						</Th>
						<Th
							textAlign={"center"}
							colSpan={2}
							borderRight={"1px"}
							borderBottom={"1px"}
							borderColor={"gray.400"}
						>
							Check In
						</Th>
						<Th
							textAlign={"center"}
							colSpan={2}
							borderRight={"1px"}
							borderBottom={"1px"}
							borderColor={"gray.400"}
						>
							Check Out
						</Th>
						<Th colSpan={1} rowSpan={2} borderRight={"1px"} borderColor={"gray.400"}>
							Status
						</Th>
						<Th colSpan={1} rowSpan={2} borderBottom={"1px"} borderColor={"gray.400"}>
							<Flex alignItems={"center"} justifyContent={"space-between"}>
								Action
								<IconButton
									icon={<HiOutlineChevronUpDown size={24} />}
									variant={"unstyled"}
								></IconButton>
							</Flex>
						</Th>
					</Tr>
					<Tr>
						<Th borderRight={"1px"} borderColor={"gray.400"}>
							Time
						</Th>
						<Th borderRight={"1px"} borderColor={"gray.400"}>
							Location
						</Th>
						<Th borderRight={"1px"} borderColor={"gray.400"}>
							Time
						</Th>
						<Th borderRight={"1px"} borderColor={"gray.400"}>
							Location
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map((data, i) => {
						return (
							<ListAttandance
								key={i}
								name={data.name}
								checkinTime={data.checkInTime}
								checkinLocation={data.checkOutLocation}
								checkoutTime={data.checkOutTime}
								checkoutLocation={data.checkOutLocation}
								status={data.status}
							/>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default TableAttandance;
