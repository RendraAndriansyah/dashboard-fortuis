import React from "react";
import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayout";
const Register = () => {
	return (
		<AuthLayout titlePages={"Register"}>
			<FormRegister titlePages={"Register"} />
		</AuthLayout>
	);
};

export default Register;
