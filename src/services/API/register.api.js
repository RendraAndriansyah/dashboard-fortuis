import axios from "axios";

export const postRegister = (data, cb) => {
	axios
		.post("https://dev-api.fortiusys.com/api/register", data)
		.then((res) => cb(true, res))
		.catch((err) => cb(false, err));
};
