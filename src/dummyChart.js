const data = {
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

const options = {
	plugins: {
		legends: false,
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

export { data, options };
