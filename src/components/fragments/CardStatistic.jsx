import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Card, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	LineElement,
	LinearScale,
	PointElement,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { data, options } from "../../dummyChart";

ChartJS.register(LineElement, CategoryScale, LinearScale, Filler, PointElement);

const responsiveTextHead = { base: "lg", md: "xl", lg: "4xl" };
const responsiveTextBody = { base: "2xs", md: "1xs", lg: "xs" };
const CardStatistic = () => {
	return (
		<Card w={{ base: "100%", md: "33%" }}>
			<CardHeader>
				<Box>
					<Heading size="sm">Present Employees</Heading>
				</Box>
			</CardHeader>

			<Flex justifyContent={"space-between"}>
				<Text
					textAlign={"center"}
					fontSize={responsiveTextHead}
					fontWeight={"semibold"}
					px={5}
				>
					2,420
				</Text>
				<Box>
					<Line width={"200"} height={100} data={data} options={options} />
				</Box>
			</Flex>
			<Flex p={5}>
				<ArrowUpIcon boxSize={5} color={"teal.500"} />
				<Text
					as={"span"}
					fontWeight={"semibold"}
					display={"flex"}
					gap={1}
					color={"gray.500"}
					fontSize={responsiveTextBody}
				>
					<Text color={"teal.500"}>450</Text> VS Yesterday
				</Text>
			</Flex>
		</Card>
	);
};

export default CardStatistic;
