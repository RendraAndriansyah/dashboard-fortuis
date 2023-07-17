import { CheckIcon, CloseIcon, Icon, NotAllowedIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Text, Center } from "@chakra-ui/react";

import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Tooltip,
} from "chart.js";
import React from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const SingleBarLayout = ({ children, data }) => {
	return (
		<Box
			display={"flex"}
			flexDir={"column"}
			justifyContent={"space-between"}
			w={"full"}
			h={"full"}
			boxShadow={"inner"}
			p={2}
			gap={5}
		>
			<Flex justifyContent={"space-between"}>
				{data?.datasets.map((data, i) => {
					return (
						<Box key={i} display={"flex"} flexDir={"column"} gap={10} mb={"-8"}>
							<HStack alignItems={"center"}>
								<Box bg={data.backgroundColor + "25"} p={1} rounded={"md"}>
									<Center>
										<Icon as={data.icon} boxSize={6} color={data.backgroundColor} />
									</Center>
								</Box>
								<Text fontWeight={"medium"} color={"blackAlpha.700"}>
									{data.label}
								</Text>
							</HStack>
							<Text fontSize={"3xl"} fontWeight={"semibold"} color={"blackAlpha.700"}>
								{data.data[0].x}
							</Text>
						</Box>
					);
				})}

				{/* <Box display={"flex"} flexDir={"column"} gap={10} mb={"-8"}>
					<HStack alignItems={"center"}>
						<Box bg={"purple.100"} px={1.5} py={0.5} rounded={"md"}>
							<Icon as={CloseIcon} color={"purple.500"} />
						</Box>
						<Text fontWeight={"medium"} color={"blackAlpha.700"}>
							Late
						</Text>
					</HStack>
					<Text fontSize={"3xl"} fontWeight={"semibold"} color={"blackAlpha.700"}>
						600
					</Text>
				</Box>
				<Box display={"flex"} flexDir={"column"} gap={10} mb={"-8"}>
					<HStack alignItems={"center"}>
						<Box bg={"red.100"} px={1.5} py={0.5} rounded={"md"}>
							<Icon as={NotAllowedIcon} boxSize={6} color={"red.500"} />
						</Box>
						<Text fontWeight={"medium"} color={"blackAlpha.700"}>
							Absent
						</Text>
					</HStack>
					<Text fontSize={"3xl"} fontWeight={"semibold"} color={"blackAlpha.700"}>
						350
					</Text>
				</Box> */}
			</Flex>
			{children}
		</Box>
	);
};

export default SingleBarLayout;
