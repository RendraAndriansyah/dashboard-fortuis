const ActivePath = () => {
	const path = window.location.pathname.split("/");
	return "/" + path[1];
};

export default ActivePath;
