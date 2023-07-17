import React, { useEffect, useState } from "react";
import { Tr, Td, Button, Text } from "@chakra-ui/react";
import { BiMap } from "react-icons/bi";
import changeColorStatus from "../../services/utils/changeColorStatus";
const ListAttandance = (props) => {
	const { name, checkinTime, checkinLocation, checkoutTime, checkoutLocation, status } =
		props;
	const [colorStatus, SetColorStatus] = useState({ color: null, bg: null });

	useEffect(() => {
		return () => {
			changeColorStatus(status, SetColorStatus);
		};
	}, []);

	return (
		<Tr>
			<Td borderLeft={"1px"} borderColor={"gray.400"}>
				{name}
			</Td>
			<Td borderLeft={"1px"} borderColor={"gray.400"}>
				{checkinTime}
			</Td>
			<Td borderLeft={"1px"} borderColor={"gray.400"}>
				{status === "Late Checkout" ? (
					<Button
						leftIcon={<BiMap size={24} />}
						color={"blue.500"}
						_hover={{ bg: "blue.50" }}
						bg={"none"}
						variant={"solid"}
						p={"0"}
					>
						View Maps
					</Button>
				) : (
					checkinLocation
				)}
			</Td>
			<Td borderLeft={"1px"} borderColor={"gray.400"}>
				{checkoutTime}
			</Td>
			<Td borderLeft={"1px"} borderColor={"gray.400"}>
				{status === "Late Checkout" ? (
					<Button
						leftIcon={<BiMap size={24} />}
						color={"blue.500"}
						_hover={{ bg: "blue.50" }}
						bg={"none"}
						variant={"solid"}
						p={"0"}
					>
						View Maps
					</Button>
				) : (
					checkoutLocation
				)}
			</Td>
			<Td borderLeft={"1px"} borderColor={"gray.400"} color={colorStatus.color}>
				<Text
					bg={colorStatus.bg}
					textAlign={"center"}
					fontWeight={"medium"}
					rounded={"full"}
					py={1}
				>
					{status}
				</Text>
			</Td>
			<Td borderLeft={"1px"} borderColor={"gray.400"}>
				Details
			</Td>
		</Tr>
	);
};

export default ListAttandance;
