import axios from "axios";

export const getLocation = (cb) => {
	axios
		.get("https://dev-api.fortiusys.com/api/location")
		.then((res) => cb(res.data.data))
		.catch((err) => console.log(err));
};
