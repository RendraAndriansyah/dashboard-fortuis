import { Chart } from "chart.js";
import { CheckIcon, NotAllowedIcon, CloseIcon } from "@chakra-ui/icons";
import {
	AiOutlineClose,
	AiOutlineCheck,
	AiOutlineStop,
	AiOutlineCalendar,
	AiOutlineFrown,
	AiOutlineAppstore,
} from "react-icons/ai";

// =====================
// === DATA SETTINGS ===
// =====================

export const dataEmployee = {
	labels: ["a", "b", "c", "e"],
	datasets: [
		{
			data: [1, 2.4, 1.8, 4],
			backgroundColor: "#22b97f20",
			borderColor: "#22b97f",
			pointBorderColor: "transparent",
			borderWidth: 2,
			fill: true,
			tension: 0.4,
		},
	],
};

export const dataDepartement = {
	labels: ["a", "b", "c", "e"],
	datasets: [
		{
			data: [4, 1.8, 2.4, 1],
			backgroundColor: "#e3242b20",
			borderColor: "#e3242b",
			pointBorderColor: "transparent",
			borderWidth: 2,
			fill: true,
			tension: 0.4,
		},
	],
};

export const dataGender = {
	labels: ["Male", "Female"],
	datasets: [
		{
			label: "poll",
			data: [43, 57],
			backgroundColor: ["#1153F8", "#FEA3B4"],
			borderColor: ["#1153F820", "#FEA3B420"],
		},
	],
};

export const dataStatus = {
	labels: ["Married", "Not Married"],
	datasets: [
		{
			label: "poll",
			data: [43, 57],
			backgroundColor: ["#7101FF", "#84CAFF"],
			borderColor: ["#7101FF20", "#84CAFF20"],
		},
	],
};

export const dataAttandance = {
	labels: ["mo", "tu", "we", "th", "fr", "sa", "su"],
	datasets: [
		{
			label: "attendance",
			data: [2, 4, 3, 1.5, 5, 3.5, 5],
			backgroundColor: "#D9D6FE",
			borderColor: "#D9D6FE20",
			borderRadius: 10,
			borderWidth: 5,
		},
	],
};

export const dataPresence = {
	labels: ["Presence"],

	datasets: [
		{
			label: "Present",
			data: [
				{
					x: 1500,
					y: "Presence",
				},
			],
			icon: AiOutlineCheck,
			backgroundColor: "#0055FF",
			borderRadius: {
				topLeft: 50,
				bottomLeft: 50,
			},
			borderSkipped: false,
		},
		{
			label: "Late",
			data: [
				{
					x: 600,
					y: "Presence",
				},
			],
			icon: AiOutlineClose,

			backgroundColor: "#7101FF",
		},
		{
			label: "Absent",
			data: [
				{
					x: 350,
					y: "Presence",
				},
			],
			icon: AiOutlineStop,

			backgroundColor: "#F04438",
			borderRadius: 10,
		},
	],
};

export const dataLeaveReport = {
	labels: ["mo", "tu", "we", "th", "fr", "sa", "su"],
	datasets: [
		{
			label: "attendance",
			data: [2, 4, 3, 1.5, 5, 3.5, 5],
			backgroundColor: "#C7D7FE",
			borderColor: "#C7D7FE20",
			borderRadius: 10,
			borderWidth: 5,
		},
	],
};

export const dataLeaveTypeTaken = {
	labels: ["Leave type taken"],

	datasets: [
		{
			label: "Annual",
			data: [
				{
					x: 1500,
					y: "Leave type taken",
				},
			],
			icon: AiOutlineCalendar,
			backgroundColor: "#0055FF",
			borderRadius: {
				topLeft: 50,
				bottomLeft: 50,
			},
			borderSkipped: false,
		},
		{
			label: "Medical",
			data: [
				{
					x: 600,
					y: "Leave type taken",
				},
			],
			icon: AiOutlineFrown,

			backgroundColor: "#7101FF",
		},
		{
			label: "Other",
			data: [
				{
					x: 350,
					y: "Leave type taken",
				},
			],
			icon: AiOutlineAppstore,

			backgroundColor: "#F79719",
			borderRadius: 10,
		},
	],
};

export const dataVisitedArea = {
	labels: ["Visited Area"],

	datasets: [
		{
			label: "Kebayoran",
			data: [
				{
					x: 250,
					y: "Visited Area",
				},
			],
			backgroundColor: "#FEC84B",
			borderRadius: {
				topLeft: 50,
				bottomLeft: 50,
			},
			borderSkipped: false,
		},
		{
			label: "Kelurahan",
			data: [
				{
					x: 150,
					y: "Visited Area",
				},
			],
			backgroundColor: "#0055FF",
		},
		{
			label: "Margahayu",
			data: [
				{
					x: 200,
					y: "Visited Area",
				},
			],
			backgroundColor: "#12B76A",
		},
		{
			label: "Sawangan Lama",
			data: [
				{
					x: 150,
					y: "Visited Area",
				},
			],
			backgroundColor: "#DC6803",
		},
		{
			label: "Cakung",
			data: [
				{
					x: 100,
					y: "Visited Area",
				},
			],
			backgroundColor: "#7101FF",
		},
		{
			label: "Others",
			data: [
				{
					x: 150,
					y: "Visited Area",
				},
			],
			backgroundColor: "#EAECF5",
			borderRadius: 20,
		},
	],
};

// =======================
// === OPTION SETTINGS ===
// =======================
export const optionsLine = {
	plugins: {
		legend: { display: false },
	},
	scales: {
		x: {
			display: false,
			grid: {
				display: false,
			},
		},
		y: {
			display: false,

			ticks: {
				stepSize: 0,
			},
			grid: {
				borderDash: "transparent",
				display: false,
			},
		},
	},
	maintanceAspectRatio: false,
};

export const optionsDoughnut = {
	defaultFontFamyly: (Chart.defaults.font.family = "sans-serif"),
	labels: { display: false },
	plugins: {
		legend: { display: false },
	},
	cutout: "70%",
	radius: "90%",
	rotation: 290,
	title: {
		display: true,
		text: "Custom Chart Title",
		position: "bottom",
	},
};

export const optionsAttandance = {
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		x: {
			display: true,
			ticks: {
				font: {
					size: 16,
				},
			},

			grid: {
				display: false,
			},
		},
		y: {
			display: false,
			grid: {
				display: false,
			},
		},
	},
};

export const optionsPresence = {
	plugins: {
		legend: {
			display: false,
		},
	},
	indexAxis: "y",
	barThickness: 12,

	scales: {
		x: {
			display: false,
			stacked: true,
			grid: {
				display: false,
			},
			max: 2450,
		},
		y: {
			stacked: true,
			display: false,
			grid: {
				display: false,
			},
		},
	},
};

export const optionsVisitedArea = {
	plugins: {
		legend: {
			display: false,
			position: "bottom",
			align: "start",
			labels: {
				boxWidth: 12,
			},
		},
	},
	indexAxis: "y",
	barThickness: 20,

	scales: {
		x: {
			display: false,
			stacked: true,
			grid: {
				display: false,
			},
			max: 1000,
		},
		y: {
			stacked: true,
			display: false,
			grid: {
				display: false,
			},
		},
	},
};

// ========================
// === PLUGINS SETTINGS ===
// ========================

export const textGender = {
	id: "textGender", // for dataGender
	beforeDatasetDraw: function (chart) {
		const xCoor = chart.getDatasetMeta(0).data[0].x;
		const yCoor = chart.getDatasetMeta(0).data[0].y;
		let { ctx, data } = chart;
		ctx.save();
		ctx.font = "bolder 1em Helvetica";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "#1153F8";
		ctx.textAlign = "center";
		ctx.fillText(`${data.labels[0]} `, xCoor, yCoor - 12);
		ctx.restore();
		ctx.font = "bolder 1em Helvetica";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "#C5257D";
		ctx.textAlign = "center";
		ctx.fillText(`${data.labels[1]}`, xCoor, yCoor + 12);
	},
};

export const textStatus = {
	id: "textStatus", // for dataStatus
	beforeDatasetDraw: function (chart) {
		const xCoor = chart.getDatasetMeta(0).data[0].x;
		const yCoor = chart.getDatasetMeta(0).data[0].y;
		let { ctx, data } = chart;
		ctx.save();
		ctx.font = "bolder 1em Helvetica";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "#7101FF";
		ctx.textAlign = "center";
		ctx.fillText(`${data.labels[0]} `, xCoor, yCoor - 12);
		ctx.restore();
		ctx.font = "bolder 1em Helvetica";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "#84CAFF";
		ctx.textAlign = "center";
		ctx.fillText(`${data.labels[1]}`, xCoor, yCoor + 12);
	},
};

// ================
// === PRESENCE ===
// ================
