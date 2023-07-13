import { Box, Card, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Export from "../components/elements/button/ExportBtn";
import Notification from "../components/elements/button/NotificationBtn";
import Search from "../components/elements/input/Search";
import CardStatistic from "../components/fragments/CardStatistic";
import Content from "../components/layouts/Content";
import MainLayout from "../components/layouts/MainLayout";
import Navigation from "../components/layouts/Navigation";

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
						<Card boxShadow={"md"} p={5}>
							<Text fontSize={24} fontWeight={"medium"}>
								Company Overview
							</Text>
							<Box display={"flex"} flexDir={"column"} gap={5}>
								<CardStatistic />
								<CardStatistic />
							</Box>
							{/* <CardStatistic /> */}
						</Card>
					</Flex>
				</Content>
			</MainLayout>
		</>
	);
};

export default Home;
