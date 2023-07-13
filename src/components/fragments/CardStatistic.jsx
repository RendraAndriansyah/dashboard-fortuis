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

const CardStatistic = () => {
	return (
		<Card w={"-moz-fit-content"}>
			<Flex>
				<Box>
					<CardHeader>
						<Box>
							<Heading size="sm">Total Employees</Heading>
						</Box>
					</CardHeader>

					<Flex justifyContent={"space-between"} gap={10}>
						<Text textAlign={"center"} fontSize={"4xl"} fontWeight={"semibold"} px={5}>
							2,420
						</Text>
					</Flex>
					<Flex p={5}>
						<ArrowUpIcon boxSize={5} color={"teal.500"} />
						<Text
							as={"span"}
							fontWeight={"semibold"}
							display={"flex"}
							gap={1}
							color={"gray.500"}
							fontSize={"small"}
						>
							<Text color={"teal.500"}>450</Text> VS Yesterday
						</Text>
					</Flex>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Line width={"200"} height={"100"} data={data} options={options} />
				</Box>
			</Flex>
		</Card>
	);
};

export default CardStatistic;
