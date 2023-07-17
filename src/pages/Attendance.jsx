import {
	Card,
	Flex,
	Table,
	TableContainer,
	Tbody,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React from "react";
import HeaderContent from "../components/fragments/HeaderContent";
import ListAttandance from "../components/fragments/ListAttandance";
import ChartLine from "../components/fragments/chart/ChartLine";
import Content from "../components/layouts/Content";
import MainLayout from "../components/layouts/MainLayout";
import Navigation from "../components/layouts/Navigation";
import {
	dataEmployeeOnLeaves,
	dataLateEmployee,
	dataPresentEmployee,
} from "../dummyChart";
import data from "../dummyTableAttandance";
const Attendance = () => {
	return (
		<>
			<MainLayout>
				<Navigation />
				<Content>
					<HeaderContent />
					<Flex
						justify={"space-between"}
						gap={3}
						pt={5}
						flexDirection={{ base: "column", md: "column", lg: "row" }}
					>
						<ChartLine
							data={dataPresentEmployee}
							title={"Present Employee"}
							isUptren={true}
						/>
						<ChartLine data={dataLateEmployee} title={"Late Employee"} isUptren={false} />
						<ChartLine
							data={dataEmployeeOnLeaves}
							title={"Employee on Leaves"}
							isUptren={true}
						/>
					</Flex>
					<Card p={6}>
						<TableContainer border={"1px"} rounded={"lg"} borderColor={"gray.400"}>
							<Table>
								<Thead bg={"blue.50"}>
									<Tr>
										<Th
											colSpan={1}
											rowSpan={2}
											borderRight={"1px"}
											borderColor={"gray.400"}
										>
											Employee Name
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
										<Th
											colSpan={1}
											rowSpan={2}
											borderRight={"1px"}
											borderColor={"gray.400"}
										>
											Status
										</Th>
										<Th
											colSpan={1}
											rowSpan={2}
											borderBottom={"1px"}
											borderColor={"gray.400"}
										>
											Action
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
					</Card>
				</Content>
			</MainLayout>
		</>
	);
};

export default Attendance;
