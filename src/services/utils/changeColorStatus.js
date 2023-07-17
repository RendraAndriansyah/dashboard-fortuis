const changeColorStatus = (val, cb) => {
	switch (val) {
		case "Early Checkin":
			cb({ color: "green.500", bg: "green.50" });
			break;
		case "On Time":
			cb({ color: "blue.500", bg: "blue.50" });
			break;
		case "Absent":
			cb({ color: "red.500", bg: "red.50" });
			break;
		case "Late Checkin":
			cb({ color: "purple.500", bg: "purple.50" });
			break;
		case "Early Checkout":
			cb({ color: "yellow.500", bg: "yellow.50" });
			break;
		case "Late Checkout":
			cb({ color: "orange.500", bg: "orange.50" });
			break;
		default:
			break;
	}
};

export default changeColorStatus;
