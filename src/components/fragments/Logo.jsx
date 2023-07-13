import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillAmazonCircle } from "react-icons/ai";

const Logo = ({ collapse }) => {
	return (
		<Flex justifyContent={!collapse ? "space-between" : "center"}>
			<Box display={"flex"} alignItems={"center"} gap={2}>
				<Icon as={AiFillAmazonCircle} fontSize={56} />
				{!collapse && (
					<Text textColor={"whiteAlpha.900"} fontWeight={"bold"} fontSize={28}>
						Fortuis
					</Text>
				)}
			</Box>
		</Flex>
	);
};

export default Logo;
