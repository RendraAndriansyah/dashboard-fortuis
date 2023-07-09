import axios from "axios";

const header = { "Content-Type": "text/json" };
export const postLogin = (data, cb) => {
	axios
		.post("https://dev-api.fortiusys.com/api/login", data)
		.then((res) => {
			cb(true, res);
		})
		.catch((err) => {
			cb(false, err);
		});
};
