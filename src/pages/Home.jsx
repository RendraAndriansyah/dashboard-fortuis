import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Export from "../components/elements/button/Export";
import Notification from "../components/elements/button/Notification";
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
						<CardStatistic />
						<CardStatistic />
						<CardStatistic />
					</Flex>
				</Content>
			</MainLayout>
		</>
	);
};

export default Home;
