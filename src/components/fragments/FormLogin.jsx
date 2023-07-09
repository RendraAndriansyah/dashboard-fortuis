import {
	Box,
	Button,
	Center,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { updateUser } from "../../redux/slices.js/userSlice";
import { postLogin } from "../../services/API/login.api";

const FormLogin = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [errorLogin, setErrorLogin] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: handleLogin,
		validationSchema: yup.object().shape({
			email: yup.string().required().email(),
			password: yup.string().required(),
		}),
	});

	function handleLogin() {
		postLogin(formik.values, async (status, res) => {
			if (status) {
				dispatch(updateUser(res.data.data));
				await Swal.fire({
					position: "center",
					icon: "success",
					title: "Login Success",
					showConfirmButton: false,
					timer: 1500,
				});
				navigate("/");
			} else {
				setErrorLogin(res.response.data.error.message);
			}
		});
	}

	function handleForm(e) {
		const { target } = e;
		formik.setFieldValue(target.name, target.value);
	}

	return (
		<form onSubmit={formik.handleSubmit}>
			<Stack spacing={3}>
				<FormControl isInvalid={formik.errors.email}>
					<FormLabel>Email</FormLabel>
					<Input onChange={handleForm} type="email" name="email" />
				</FormControl>
				<FormControl isInvalid={formik.errors.password}>
					<FormLabel>Password</FormLabel>
					<InputGroup>
						<Input
							type={showPassword ? "text" : "password"}
							name="password"
							placeholder="********"
							onChange={handleForm}
						/>
						<InputRightElement>
							<Box
								variant={"link"}
								cursor={"pointer"}
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
							</Box>
						</InputRightElement>
					</InputGroup>
					<FormHelperText color={"green.100"} fontSize={"2xs"}>
						Password must contain number
					</FormHelperText>
				</FormControl>

				<Button
					type="submit"
					bg="blue.600"
					textColor={"gray.100"}
					_hover={{ background: "blue.700" }}
				>
					Login
				</Button>
				<Center>
					{errorLogin && (
						<Text color={"red.500"} fontWeight={"medium"} fontSize={"sm"}>
							{errorLogin}
						</Text>
					)}
				</Center>

				<Text as={"p"} fontSize={"sm"}>
					Don't you have an Account ?
					<Text as="span" textColor={"blue.600"} fontWeight={"semibold"} pl={1}>
						<Link to={"/register"}>Sign up</Link>
					</Text>
				</Text>
			</Stack>
		</form>
	);
};

export default FormLogin;
