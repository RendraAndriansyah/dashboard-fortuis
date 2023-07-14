import { Card, Text } from "@chakra-ui/react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { optionsDoughnut } from "../../dummyChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const CardDiversity = ({ data, plugins }) => {
	return (
		<Card boxShadow={"lg"} w={"-moz-fit-content"}>
			<Text fontWeight={"semibold"} textAlign={"center"}>
				Gender
			</Text>
			<Doughnut
				width={"200"}
				height={"200"}
				data={data}
				options={optionsDoughnut}
				plugins={[plugins]}
			></Doughnut>
		</Card>
	);
};

export default CardDiversity;
