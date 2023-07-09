import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Account = ({ collapse }) => {
	const user = useSelector((state) => state.data.user);
	return (
		<Flex w={"full"} py={2} px={1} gap={2} flexDirection={"row"} alignItems={"center"}>
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
	);
};

export default Account;
