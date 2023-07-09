import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Text,
	InputGroup,
	InputRightElement,
	FormHelperText,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Select } from "chakra-react-select";
import { getLocation } from "../../services/API/location.api";
import { getBusiness } from "../../services/API/business.api";
import { postRegister } from "../../services/API/register.api";
import Swal from "sweetalert2";
const FormRegister = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
	const [optionCompanyLocation, setOptionCompanyLocation] = useState([]);
	const [optionBusiness, setOptionBusiness] = useState([]);
	const [errorRegister, setErrorRegister] = useState("");

	useEffect(() => {
		getLocation((data) => {
			setOptionCompanyLocation(
				data.map((data) => {
					return {
						name: "company_location",
						value: data.id,
						label: data.name,
					};
				})
			);
		});
		getBusiness((data) => {
			setOptionBusiness(
				data.map((data) => {
					return {
						name: "business",
						value: data.id,
						label: data.business_name,
					};
				})
			);
		});
	}, []);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			password_confirmation: "",
			company_name: "",
			company_location: null,
			business: null,
			number_of_employees: null,
		},
		onSubmit: handleRegister,
		validationSchema: yup.object().shape({
			email: yup.string().required().email(),
			password: yup.string().required().min(8, "Too Short"),
			password_confirmation: yup
				.string()
				.oneOf([yup.ref("password")], "Passwords not match !"),
		}),
	});

	function handleRegister() {
		postRegister(formik.values, async (status, res) => {
			if (status) {
				await Swal.fire({
					position: "center",
					icon: "success",
					title: "Register Success",
					showConfirmButton: false,
					timer: 1500,
				});
				navigate("/login");
			} else {
				setErrorRegister(res.response.data.error.message);
			}
		});
		console.log(formik.values);
	}

	function handleForm(e) {
		const { target } = e;
		formik.setFieldValue(target.name, target.value);
	}

	function handleSelect(e) {
		formik.setFieldValue(e.name, e.value);
	}

	return (
		<form onSubmit={formik.handleSubmit}>
			<Stack spacing={2}>
				<Flex justifyContent={"space-between"} columnGap={10}>
					{/* Form left */}
					<Flex flexDir={"column"} gap={2}>
						<FormControl>
							<FormLabel fontSize={"sm"}>name</FormLabel>
							<Input size={"sm"} onChange={handleForm} type="text" name="name" />
						</FormControl>
						<FormControl>
							<FormLabel fontSize={"sm"}>Email</FormLabel>
							<Input size={"sm"} onChange={handleForm} type="email" name="email" />
						</FormControl>
						<FormControl isInvalid={formik.errors.password}>
							<FormLabel fontSize={"sm"}>Password</FormLabel>
							<InputGroup size="sm">
								<Input
									type={showPassword ? "text" : "password"}
									name="password"
									placeholder="********"
									onChange={handleForm}
								/>
								<InputRightElement>
									<Box
										onClick={() => setShowPassword(!showPassword)}
										variant={"link"}
										cursor={"pointer"}
									>
										{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
									</Box>
								</InputRightElement>
							</InputGroup>
							<FormHelperText fontSize={"2xs"}>{formik.errors.password}</FormHelperText>
						</FormControl>
						<FormControl isInvalid={formik.errors.password_confirmation}>
							<FormLabel fontSize={"sm"}>Password confirmation</FormLabel>
							<InputGroup size="sm">
								<Input
									type={showPasswordConfirm ? "text" : "password"}
									name="password_confirmation"
									placeholder="********"
									onChange={handleForm}
								/>
								<InputRightElement>
									<Box
										variant={"unstyled"}
										onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
									>
										{showPasswordConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
									</Box>
								</InputRightElement>
							</InputGroup>
							<FormHelperText fontSize={"2xs"}>
								{
									<Text
										color={formik.errors.password_confirmation ? "red.500" : "gray.100"}
									>
										{formik.errors.password_confirmation}
									</Text>
								}
							</FormHelperText>
						</FormControl>
					</Flex>

					{/* Form right */}
					<Flex flexDir={"column"} gap={2} w={"sm"}>
						<FormControl>
							<FormLabel fontSize={"sm"}>Company name</FormLabel>
							<Input size={"sm"} onChange={handleForm} type="text" name="company_name" />
						</FormControl>
						<FormControl>
							<FormLabel fontSize={"sm"}>Company location</FormLabel>
							<Select
								options={optionCompanyLocation}
								placeholder={"select Location"}
								size={"sm"}
								onChange={handleSelect}
								maxMenuHeight={"160"}
							/>
						</FormControl>
						<FormControl>
							<FormLabel fontSize={"sm"}>Business</FormLabel>
							<Select
								options={optionBusiness}
								placeholder={"select business"}
								size={"sm"}
								name="business"
								maxMenuHeight={"160"}
								onChange={handleSelect}
							/>

							<Text color={"gray.100"} fontSize={"xs"}>
								.
							</Text>
						</FormControl>
						<FormControl>
							<FormLabel fontSize={"sm"}>Number of employees</FormLabel>
							<Input
								size={"sm"}
								type="number"
								onChange={(e) =>
									formik.setFieldValue(e.target.name, Number(e.target.value))
								}
								name="number_of_employees"
							/>
						</FormControl>
					</Flex>
				</Flex>

				<Center pt={4}>
					<Box>
						<Text fontSize={"sm"} fontWeight={"medium"} color={"red.500"}>
							{errorRegister}
						</Text>
						<Button
							w={"2xs"}
							type="submit"
							bg="blue.600"
							textColor={"gray.100"}
							_hover={{ background: "blue.700" }}
						>
							Register
						</Button>
						<Text as={"p"} fontSize={"sm"} pt={1}>
							Already have an Account ?
							<Text as="span" textColor={"blue.600"} fontWeight={"semibold"} pl={1}>
								<Link to={"/login"}>Sign In</Link>
							</Text>
						</Text>
					</Box>
				</Center>
			</Stack>
		</form>
	);
};

export default FormRegister;
