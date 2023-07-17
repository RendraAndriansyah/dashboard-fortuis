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
	return <Bar data={data} options={options} height={30} />;
};

export default ChartSingleBar;
