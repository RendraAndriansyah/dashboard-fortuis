import { Chart, scales } from "chart.js";

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
			backgroundColor: "#0055FF",
			borderRadius: {
				topLeft: 20,
				bottomLeft: 20,
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
			backgroundColor: "#7101FF",
		},
		{
			label: "Absen",
			data: [
				{
					x: 350,
					y: "Presence",
				},
			],
			backgroundColor: "#F04438",
			borderRadius: 10,
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
		legend: { display: false },
	},
	scales: {
		x: {
			display: true,
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
			align: "center",
			labels: {
				font: {
					weight: "bold",
					size: 14,
				},
			},
			onClick: false,
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
			max: 2450,
		},
		y: {
			beginAtZero: true,
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
