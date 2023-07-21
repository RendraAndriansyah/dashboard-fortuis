import { Box, Button, Card, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFilter } from "react-icons/bs";
import DateAttandanceBtn from "../components/elements/button/DateAttandanceBtn";
import HeaderContent from "../components/fragments/HeaderContent";
import ChartLine from "../components/fragments/chart/ChartLine";
import Content from "../components/layouts/Content";
import MainLayout from "../components/layouts/MainLayout";
import Navigation from "../components/layouts/Navigation";
import {
	dataEmployeeOnLeaves,
	dataLateEmployee,
	dataPresentEmployee,
} from "../services/dummyChart";

import TableAttandance from "../components/fragments/TableAttandance";
import data from "../services/dummyTableAttandance";
const Attendance = () => {
	return (
		<>
			<MainLayout>
				<Navigation />
				<Content>
					<HeaderContent />
					<Flex pt={4} justify={"space-between"}>
						<Box>
							<Text as={"h3"} fontSize={"3xl"} color={"gray.700"} fontWeight={"semibold"}>
								Welcome back, John
							</Text>
							<Text as={"p"} color={"gray.500"}>
								You're Working at ABC Company
							</Text>
						</Box>
					</Flex>
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
					<Card px={6} py={4} mt={0}>
						<Center pb={5}>
							<DateAttandanceBtn />
							<Box position={"absolute"} top={2} right={6}>
								<Button leftIcon={<BsFilter size={24} />} variant={"outline"}>
									More Filter
								</Button>
							</Box>
						</Center>
						<TableAttandance data={data} />

						<Flex pt={3} justifyContent={"space-between"}>
							<Box display={"flex"} gap={2}>
								<Button variant={"outline"}>Previous</Button>
								<Button variant={"outline"}>Next</Button>
							</Box>
							<Text fontWeight={"medium"}>Page 1 of 10</Text>
						</Flex>
					</Card>
				</Content>
			</MainLayout>
		</>
	);
};

export default Attendance;
