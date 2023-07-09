import axios from "axios";

export const getBusiness = (cb) => {
	axios
		.get("https://dev-api.fortiusys.com/api/business")
		.then((res) => cb(res.data.data))
		.catch((err) => console.log(err));
};
