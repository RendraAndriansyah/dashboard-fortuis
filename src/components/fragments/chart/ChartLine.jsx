import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
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
import { optionsLine } from "../../../services/dummyChart";

ChartJS.register(LineElement, CategoryScale, LinearScale, Filler, PointElement);

const CardStatistic = ({ data, title, isUptren }) => {
	return (
		<Card w={"-moz-initial"}>
			<Flex gap={2} justifyContent={"space-between"}>
				<Box w={"-moz-fit-content"}>
					<CardHeader>
						<Box>
							<Heading size="sm">{title}</Heading>
						</Box>
					</CardHeader>

					<Flex justifyContent={"space-between"} gap={10}>
						<Text textAlign={"center"} fontSize={"4xl"} fontWeight={"semibold"} px={5}>
							{data.datasets[0].fakeTotal}
						</Text>
					</Flex>
					<Flex p={5}>
						{isUptren ? (
							<ArrowUpIcon boxSize={5} color={"teal.500"} />
						) : (
							<ArrowDownIcon boxSize={5} color={"red.500"} />
						)}
						<Text
							pl={1}
							as={"span"}
							fontWeight={"semibold"}
							display={"flex"}
							gap={1}
							color={"gray.500"}
							fontSize={"small"}
						>
							<Text color={isUptren ? "teal.500" : "red.600"}>450</Text> VS Yesterday
						</Text>
					</Flex>
				</Box>
				<Box display={"flex"} alignItems={"center"} w={150}>
					<Line data={data} options={optionsLine} />
				</Box>
			</Flex>
		</Card>
	);
};

export default CardStatistic;
