import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Box, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";

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
		<Box w={"full"} h={"full"} boxShadow={"inner"}>
			<Box display={"flex"} w={"full"}>
				<Bar data={data} options={options} height={"100"} />
			</Box>
		</Box>
	);
};

export default ChartSingleBar;
