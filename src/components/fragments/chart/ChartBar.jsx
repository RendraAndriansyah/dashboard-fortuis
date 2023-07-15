import { Card, Text, Flex, Box, CardHeader, Heading, CardBody } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Legend,
	Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const ChartBar = ({ data, isUptren, options }) => {
	return (
		<Box w={"-moz-fit-content"} h={"full"}>
			<Flex justifyContent={"space-between"}>
				<Box w={"-moz-fit-content"}>
					<CardHeader>
						<Box>
							<Heading size="sm">{""}</Heading>
						</Box>
					</CardHeader>
					<CardBody>{""}</CardBody>

					<Flex flexDir={"column"} p={5}>
						<Text fontSize={"4xl"} fontWeight={"semibold"}>
							2,420
						</Text>
						<Flex>
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
					</Flex>
				</Box>
				<Box display={"flex"} alignItems={"end"} pb={5} w={"-webkit-fit-content"}>
					<Bar data={data} options={options} />
				</Box>
			</Flex>
		</Box>
	);
};

export default ChartBar;
