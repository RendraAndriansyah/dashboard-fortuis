import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Attendance from "./pages/Attendance";
import Schedule from "./pages/Schedule";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/attendance",
		element: <Attendance />,
	},
	{
		path: "/schedule",
		element: <Schedule />,
	},
	{
		path: "*",
		element: <Home />,
	},
]);

export default routes;
