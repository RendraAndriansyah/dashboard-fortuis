import { Box, Divider, Button, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Account from "./Account";
import Logo from "./Logo";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../redux/slices.js/userSlice";
import Swal from "sweetalert2";

const Sidebar = ({ collapse }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector((state) => state.data.token);

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
		<>
			<Box w="full">
				{/*Logo  */}
				<Logo collapse={collapse} />
				{/* menu */}
				<Menu collapse={collapse} />
			</Box>
			{/* Account */}
			<Box w={"full"}>
				<Button
					leftIcon={!token ? <BiLogInCircle /> : <BiLogOutCircle />}
					colorScheme="white"
					variant="unstyled"
					fontSize={24}
					display={"flex"}
					_hover={!token ? { color: "blue.400" } : { color: "red.400" }}
					pl={collapse ? "4" : ""}
					onClick={() => {
						!token ? navigate("/login") : logout();
					}}
				>
					{!collapse && <Text>{!token ? "Login" : "Logout"}</Text>}
				</Button>

				<Divider py={2} />
				<Account collapse={collapse} />
			</Box>
		</>
	);
};

export default Sidebar;
