import { Button, Avatar, Box, Flex, Text, Divider } from "@chakra-ui/react";
import React from "react";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { clearUser } from "../../redux/slices.js/userSlice";

const Account = ({ collapse }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector((state) => state.data.token);
	const user = useSelector((state) => state.data.user);

	const logout = () => {
		Swal.fire({
			title: "Are you sure want to logout?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			confirmButtonText: "Yes",
			cancelButtonColor: "#d33",
			cancelButtonText: "No",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					position: "center",
					icon: "success",
					showConfirmButton: false,
					timer: 1500,
				});
				dispatch(clearUser());
				navigate("/login");
			}
		});
	};

	return (
		<Box w={"full"}>
			<Button
				leftIcon={!token ? <BiLogInCircle /> : <BiLogOutCircle />}
				colorScheme="white"
				variant="unstyled"
				fontSize={34}
				display={"flex"}
				justifyContent={!collapse ? "start" : "center"}
				_hover={!token ? { color: "blue.400" } : { color: "red.400" }}
				pl={collapse ? "3" : "1"}
				onClick={() => {
					!token ? navigate("/login") : logout();
				}}
			>
				{!collapse && <Text fontSize={18}>{!token ? "Login" : "Logout"}</Text>}
			</Button>

			<Divider py={1} />
			<Flex
				w={"full"}
				py={2}
				px={1}
				flexDirection={"row"}
				justifyContent={!collapse ? "start" : "center"}
			>
				<Avatar name={user?.name || ""} />
				{!collapse && (
					<Flex>
						{user && (
							<Box display={"flex"} flexDir={"column"} gap={2} pb={3}>
								<Text fontSize={"sm"}>{user.name.slice(1, 17) + "..."}</Text>
								<Text fontSize={"sm"} fontWeight={"bold"} lineHeight={0}>
									{user.email}
								</Text>
							</Box>
						)}
					</Flex>
				)}
			</Flex>
		</Box>
	);
};

export default Account;
