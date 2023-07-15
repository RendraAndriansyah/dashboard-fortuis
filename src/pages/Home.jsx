import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Divider,
	Flex,
	HStack,
	Icon,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { BiCalendarCheck } from "react-icons/bi";
import Export from "../components/elements/button/ExportBtn";
import Notification from "../components/elements/button/NotificationBtn";
import Search from "../components/elements/input/Search";
import ChartDoughnut from "../components/fragments/chart/ChartDoughnut";
import ChartLine from "../components/fragments/chart/ChartLine";
import Content from "../components/layouts/Content";
import MainLayout from "../components/layouts/MainLayout";
import Navigation from "../components/layouts/Navigation";
import {
	dataAttandance,
	dataDepartement,
	dataEmployee,
	dataGender,
	dataStatus,
	optionsAttandance,
	textGender,
	textStatus,
} from "../dummyChart";
import ChartBar from "../components/fragments/chart/ChartBar";

const Home = () => {
	return (
		<>
			<MainLayout>
				<Navigation />
				<Content>
					<Flex justify={"space-between"} h={10}>
						<Text color={"blue.500"} fontSize={"xl"} fontWeight={"bold"}>
							COMPANY NAME
						</Text>
						<Box display={"flex"} gap={4}>
							<Notification />
							<Search />
						</Box>
					</Flex>
					<Flex pt={4} justify={"space-between"}>
						<Box>
							<Text as={"h3"} fontSize={"3xl"} color={"gray.700"} fontWeight={"semibold"}>
								Welcome back, John
							</Text>
							<Text as={"p"} color={"gray.500"}>
								You're Working at ABC Company
							</Text>
						</Box>
						<Export />
					</Flex>
					<Flex
						justify={"space-between"}
						gap={3}
						pt={5}
						flexDirection={{ base: "column", md: "row", lg: "column" }}
					>
						{/* COMPANY OVERVIEW */}
						<Card boxShadow={"md"} px={3} w={"full"}>
							<CardHeader fontSize={24} fontWeight={"medium"} pl={1}>
								Company Overview
							</CardHeader>

							<CardBody display={"flex"} gap={8} justifyContent={"space-between"}>
								<Box display={"flex"} flexDir={"column"} gap={5} w={"40%"}>
									<ChartLine
										data={dataEmployee}
										title={"Total Employee"}
										isUptren={true}
									/>
									<ChartLine
										data={dataDepartement}
										title={"Total Departement"}
										isUptren={false}
									/>
								</Box>
								<Box w={"50%"}>
									<Box boxShadow={"md"} p={5} h={"full"}>
										<Text fontSize={18} fontWeight={"semibold"} px={8}>
											Divercity
										</Text>
										<Flex
											h={"full"}
											gap={5}
											justifyContent={"space-around"}
											alignItems={"center"}
										>
											<ChartDoughnut
												title={"Gender"}
												data={dataGender}
												plugins={textGender}
											/>
											<ChartDoughnut
												title={"Status"}
												data={dataStatus}
												plugins={textStatus}
											/>
										</Flex>
									</Box>
								</Box>
							</CardBody>
						</Card>

						{/* ATTANDANCE REPORT */}
						<Card boxShadow={"md"} px={3} w={"full"}>
							<CardHeader>
								<HStack fontSize={18} pl={1}>
									<Icon as={BiCalendarCheck} boxSize={"7"} />
									<Text>Attandance Report</Text>
								</HStack>
							</CardHeader>

							<CardBody display={"flex"} justifyContent={"space-between"}>
								<Box display={"flex"} flexDir={"column"} gap={5} w={"45%"}>
									<ChartBar
										data={dataAttandance}
										options={optionsAttandance}
										title={"Total Employee"}
										isUptren={true}
									/>
									<ChartBar
										data={dataDepartement}
										title={"Total Departement"}
										isUptren={false}
									/>
								</Box>
								<Divider
									orientation="vertical"
									h={"auto"}
									borderWidth={2}
									borderColor={"gray.300"}
									rounded={"3xl"}
								/>
								<Box w={"50%"}>
									<Box boxShadow={"md"} p={5} h={"full"}>
										<Text fontSize={18} fontWeight={"semibold"} px={8}>
											Divercity
										</Text>
										<Flex
											h={"full"}
											gap={5}
											justifyContent={"space-around"}
											alignItems={"center"}
										>
											<ChartDoughnut
												title={"Gender"}
												data={dataGender}
												plugins={textGender}
											/>
											<ChartDoughnut
												title={"Status"}
												data={dataStatus}
												plugins={textStatus}
											/>
										</Flex>
									</Box>
								</Box>
							</CardBody>
						</Card>
					</Flex>
				</Content>
			</MainLayout>
		</>
	);
};

export default Home;
