import { Box, Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Export from "../components/elements/button/ExportBtn";
import Notification from "../components/elements/button/NotificationBtn";
import Search from "../components/elements/input/Search";
import CardDiversity from "../components/fragments/CardDiversity";
import CardStatistic from "../components/fragments/CardStatistic";
import Content from "../components/layouts/Content";
import MainLayout from "../components/layouts/MainLayout";
import Navigation from "../components/layouts/Navigation";
import { dataDepartement, dataEmployee, dataGender, textCenter } from "../dummyChart";

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
						flexDirection={{ base: "column", md: "row", lg: "row" }}
					>
						<Card boxShadow={"md"} px={3} w={"full"}>
							<CardHeader fontSize={24} fontWeight={"medium"} pl={1}>
								Company Overview
							</CardHeader>

							<CardBody display={"flex"} gap={8} justifyContent={"space-between"}>
								<Box display={"flex"} flexDir={"column"} gap={5} w={"40%"}>
									<CardStatistic
										data={dataEmployee}
										title={"Total Employee"}
										isUptren={true}
									/>
									<CardStatistic
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
											<CardDiversity data={dataGender} plugins={textCenter} />
											<CardDiversity data={dataGender} plugins={textCenter} />
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
