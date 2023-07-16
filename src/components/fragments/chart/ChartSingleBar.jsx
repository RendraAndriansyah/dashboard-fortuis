import {
	ArrowDownIcon,
	ArrowUpIcon,
	CheckIcon,
	CloseIcon,
	NotAllowedIcon,
} from "@chakra-ui/icons";
import { Box, CardBody, CardHeader, Flex, Heading, Text, HStack } from "@chakra-ui/react";

import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const ChartSingleBar = ({ data, options }) => {
	return (
		<Box
			display={"flex"}
			flexDir={"column"}
			justifyContent={"space-between"}
			w={"full"}
			h={"full"}
			boxShadow={"inner"}
			p={2}
			gap={5}
		>
			<Flex justifyContent={"space-between"}>
				<Box display={"flex"} flexDir={"column"} gap={10} mb={"-8"}>
					<HStack alignItems={"center"}>
						<Box bg={"blue.100"} px={1.5} py={0.5} rounded={"md"}>
							<CheckIcon color={"blue.500"} />
						</Box>
						<Text fontWeight={"medium"} color={"blackAlpha.700"}>
							Present
						</Text>
					</HStack>
					<Text fontSize={"3xl"} fontWeight={"semibold"} color={"blackAlpha.700"}>
						1,500
					</Text>
				</Box>
				<Box display={"flex"} flexDir={"column"} gap={10} mb={"-8"}>
					<HStack alignItems={"center"}>
						<Box bg={"purple.100"} px={1.5} py={0.5} rounded={"md"}>
							<CloseIcon color={"purple.500"} />
						</Box>
						<Text fontWeight={"medium"} color={"blackAlpha.700"}>
							Late
						</Text>
					</HStack>
					<Text fontSize={"3xl"} fontWeight={"semibold"} color={"blackAlpha.700"}>
						600
					</Text>
				</Box>
				<Box display={"flex"} flexDir={"column"} gap={10} mb={"-8"}>
					<HStack alignItems={"center"}>
						<Box bg={"red.100"} px={1.5} py={0.5} rounded={"md"}>
							<NotAllowedIcon boxSize={6} color={"red.500"} />
						</Box>
						<Text fontWeight={"medium"} color={"blackAlpha.700"}>
							Present
						</Text>
					</HStack>
					<Text fontSize={"3xl"} fontWeight={"semibold"} color={"blackAlpha.700"}>
						350
					</Text>
				</Box>
			</Flex>
			<Bar data={data} options={options} height={30} />
		</Box>
	);
};

export default ChartSingleBar;
