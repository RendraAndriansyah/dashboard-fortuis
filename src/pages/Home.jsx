import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Divider,
	Flex,
	Grid,
	HStack,
	Icon,
	Text,
} from "@chakra-ui/react";
import React from "react";
import {
	BiCalendarAlt,
	BiCalendarCheck,
	BiCalendarEvent,
	BiCalendarExclamation,
	BiCalendarHeart,
	BiCalendarWeek,
	BiCalendarX,
} from "react-icons/bi";
import Export from "../components/elements/button/ExportBtn";
import Notification from "../components/elements/button/NotificationBtn";
import Search from "../components/elements/input/Search";
import ChartBar from "../components/fragments/chart/ChartBar";
import ChartDoughnut from "../components/fragments/chart/ChartDoughnut";
import ChartLine from "../components/fragments/chart/ChartLine";
import ChartSingleBar from "../components/fragments/chart/ChartSingleBar";
import Content from "../components/layouts/Content";
import MainLayout from "../components/layouts/MainLayout";
import Navigation from "../components/layouts/Navigation";
import SingleBarLayout from "../components/layouts/SingleBarLayout";
import {
	dataAttandance,
	dataDepartement,
	dataEmployee,
	dataGender,
	dataPresence,
	dataStatus,
	dataVisitedArea,
	optionsAttandance,
	optionsPresence,
	optionsVisitedArea,
	textGender,
	textStatus,
} from "../dummyChart";
import { Link } from "react-router-dom";

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
						pt={5}
						gap={10}
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
									<SingleBarLayout>
										<ChartSingleBar data={dataPresence} options={optionsPresence} />
									</SingleBarLayout>
								</Box>
								<Divider
									orientation="vertical"
									h={"auto"}
									borderWidth={2}
									borderColor={"gray.300"}
									rounded={"3xl"}
								/>
								<Box w={"50%"}>
									<Box p={5} h={"full"}>
										<Flex
											justifyContent={"space-between"}
											fontWeight={"medium"}
											color={"gray.500"}
										>
											<Box>
												<Text fontSize={"2xl"}>All User Statistic</Text>
												<Text fontSize={"3xl"} color={"blackAlpha.700"}>
													25,256
													<Text as={"span"} fontSize={"xl"} pl={1} color={"gray.600"}>
														Users
													</Text>
												</Text>
											</Box>
											<Box>
												<Text fontSize={"2xl"}>Average Visit Times</Text>
												<Text fontSize={"3xl"} color={"blackAlpha.700"}>
													2
													<Text as={"span"} fontSize={"xl"} pl={1} color={"gray.600"}>
														Hours
													</Text>
													<Text as={"span"} fontSize={"3xl"} pl={1}>
														35
													</Text>
													<Text as={"span"} fontSize={"xl"} pl={1} color={"gray.600"}>
														Minutes
													</Text>
												</Text>
											</Box>
										</Flex>
										<Box pt={10}>
											<Text fontSize={"2xl"} color={"GrayText"} fontWeight={"medium"}>
												Top Visited Area
											</Text>
											<ChartSingleBar
												data={dataVisitedArea}
												options={optionsVisitedArea}
											/>
											<Grid
												gridTemplateColumns={"auto"}
												gridTemplateRows={"repeat(3,2.5em)"}
												gridAutoFlow={"column"}
											>
												{dataVisitedArea.datasets.map((data, i) => {
													return (
														<Box key={i}>
															<Flex gap={2} alignItems={"center"}>
																<Box w={4} h={4} bg={data.backgroundColor}></Box>
																<Box>{data.label}</Box>
															</Flex>
														</Box>
													);
												})}
											</Grid>
											<Flex justifyContent={"end"}>
												<Text
													color={"blue.500"}
													_hover={{ color: "blue.400" }}
													fontWeight={"medium"}
												>
													<Link to={"/attandance"} color="red.200">
														Go to Attandance
													</Link>
												</Text>
											</Flex>
										</Box>
									</Box>
								</Box>
							</CardBody>
						</Card>

						{/* LEAVE REPORT */}
						<Card boxShadow={"md"} px={3} w={"full"}>
							<CardHeader>
								<HStack fontSize={18} pl={1}>
									<Icon as={BiCalendarWeek} boxSize={"7"} />
									<Text>Leave Report</Text>
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
									<SingleBarLayout>
										<ChartSingleBar data={dataPresence} options={optionsPresence} />
									</SingleBarLayout>
								</Box>
								<Divider
									orientation="vertical"
									h={"auto"}
									borderWidth={2}
									borderColor={"gray.300"}
									rounded={"3xl"}
								/>
								<Box w={"50%"}>
									<Box p={5} h={"full"}>
										<Flex
											justifyContent={"space-between"}
											fontWeight={"medium"}
											color={"gray.500"}
										>
											<Box>
												<Text fontSize={"2xl"}>All User Statistic</Text>
												<Text fontSize={"3xl"} color={"blackAlpha.700"}>
													25,256
													<Text as={"span"} fontSize={"xl"} pl={1} color={"gray.600"}>
														Users
													</Text>
												</Text>
											</Box>
											<Box>
												<Text fontSize={"2xl"}>Average Visit Times</Text>
												<Text fontSize={"3xl"} color={"blackAlpha.700"}>
													2
													<Text as={"span"} fontSize={"xl"} pl={1} color={"gray.600"}>
														Hours
													</Text>
													<Text as={"span"} fontSize={"3xl"} pl={1}>
														35
													</Text>
													<Text as={"span"} fontSize={"xl"} pl={1} color={"gray.600"}>
														Minutes
													</Text>
												</Text>
											</Box>
										</Flex>
										<Box pt={10}>
											<Text fontSize={"2xl"} color={"GrayText"} fontWeight={"medium"}>
												Top Visited Area
											</Text>
											<ChartSingleBar
												data={dataVisitedArea}
												options={optionsVisitedArea}
											/>
											<Grid
												gridTemplateColumns={"auto"}
												gridTemplateRows={"repeat(3,2.5em)"}
												gridAutoFlow={"column"}
												// pt={2}
											>
												{dataVisitedArea.datasets.map((data, i) => {
													return (
														<Box key={i}>
															<Flex gap={2} alignItems={"center"}>
																<Box w={4} h={4} bg={data.backgroundColor}></Box>
																<Box>{data.label}</Box>
															</Flex>
														</Box>
													);
												})}
											</Grid>
											<Flex justifyContent={"end"}>
												<Text
													color={"blue.500"}
													_hover={{ color: "blue.400" }}
													fontWeight={"medium"}
												>
													<Link to={"/attandance"} color="red.200">
														Go to Attandance
													</Link>
												</Text>
											</Flex>
										</Box>
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
