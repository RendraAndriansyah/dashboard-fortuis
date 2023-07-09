import {
	Box,
	Container,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { BiLogoAmazon } from "react-icons/bi";
import bgPrimary from "../../assets/images/bg-primary.png";
import bgSecondary from "../../assets/images/bg-secondary.png";
const AuthLayout = ({ children, titlePages }) => {
	const breakpointsHead = {
		sm: "3em",
		md: "3.5em",
		lg: "4.2em",
		xl: "5.5em",
		"2xl": "6em",
	};

	const breakpointsBody = {
		sm: ".8em",
		md: ".8em",
		lg: ".9em",
		xl: "1.2em",
		"2xl": "1.5em",
	};

	const sizePrimaryImage = ["xs", "sm", "md", "lg", "xl", "2xl"];
	const sizeSecondaryImage = ["3xs", "2xs", "2xs", "2xs", "sm", "sm"];

	return (
		<HStack w={"full"} h={"100vh"} bg={"primary.100"} padding={5}>
			<Flex
				as={"main"}
				w={"full"}
				h={"full"}
				bg={"gray.100"}
				p={10}
				flexDirection={"column"}
				position={"relative"}
				borderRadius={"3xl"}
			>
				<Flex alignItems={"center"} py={16}>
					<Icon
						as={BiLogoAmazon}
						fontSize={breakpointsHead}
						color={"blue.600"}
						fontWeight={"bold"}
					/>
					<Box flexDir={"column"}>
						<Text
							fontSize={breakpointsHead}
							fontWeight={"semibold"}
							mb={-8}
							textColor={"blue.900"}
						>
							Fortius
						</Text>
						<Text as={"span"} fontWeight={"hairline"} pt={-2} fontSize={breakpointsBody}>
							Lorem ipsum dolor sit amet consectetur
						</Text>
					</Box>
				</Flex>
				<Image
					alignSelf={"flex-end"}
					position={"absolute"}
					bottom={0}
					boxSize={sizePrimaryImage}
					objectFit={"cover"}
					src={bgPrimary}
				/>
				<Image
					boxSize={titlePages === "Login" ? sizeSecondaryImage : "xs"}
					objectFit={"cover"}
					src={bgSecondary}
					position={"absolute"}
					bottom={0}
					left={0}
				/>
			</Flex>
			<Flex
				as={"aside"}
				w={"full"}
				h={"full"}
				maxW={titlePages === "Login" ? 400 : 800}
				bg={"gray.100"}
				alignItems={"center"}
				justifyContent={"center"}
				padding={4}
				borderRadius={"3xl"}
			>
				<Box>
					<Container>
						<Heading fontSize={"3xl"}>{titlePages}</Heading>

						<Box
							p={4}
							borderRadius={4}
							mt={4}
							border={"1px"}
							borderColor={"gray.200"}
							px={5}
							boxShadow={"md"}
							w={"full"}
						>
							{children}
						</Box>
					</Container>
				</Box>
			</Flex>
		</HStack>
	);
};

export default AuthLayout;
