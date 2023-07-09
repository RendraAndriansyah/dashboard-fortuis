import React from "react";
import FormLogin from "../components/fragments/FormLogin";
import AuthLayout from "../components/layouts/AuthLayout";
const Login = () => {
	return (
		<AuthLayout titlePages={"Login"}>
			<FormLogin />
		</AuthLayout>
	);
};

export default Login;
