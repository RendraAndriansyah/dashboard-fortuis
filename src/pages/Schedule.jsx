import { Box, Flex, Text } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import React from "react";
import AddSchedule from "../components/elements/input/AddSchedule";
import HeaderContent from "../components/fragments/HeaderContent";
import ListSchedule from "../components/fragments/ListSchedule";
import MenuCalendar from "../components/fragments/MenuCalendar";
import Content from "../components/layouts/Content";
import MainLayout from "../components/layouts/MainLayout";
import Navigation from "../components/layouts/Navigation";
const Schedule = () => {
	const customScroll = {
		"&::-webkit-scrollbar": {
			width: "8px",
		},
		"&::-webkit-scrollbar-track": {
			width: "2px",
		},
		"&::-webkit-scrollbar-thumb": {
			background: "#D5E0FD",
			borderRadius: "24px",
		},
	};
	return (
		<MainLayout>
			<Navigation />
			<Content>
				<HeaderContent />
				<MenuCalendar />
				<Flex pt={4} gap={3}>
					<Box display={"flex"} flexDir={"column"} gap={4} w={"20%"} h={"auto"}>
						<Box bg={"white.100"}>
							<Select placeholder={"Select Departement"} />
						</Box>
						<AddSchedule />
						<Flex
							gap={2}
							flexDir={"column"}
							css={customScroll}
							maxH={"36vh"}
							overflow={"scroll"}
						>
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
							<ListSchedule />
						</Flex>
					</Box>

					<Box w={"80%"} maxH="full" bg={"whatsapp.300"}>
						<Flex h={"full"} alignItems={"center"} justifyContent={"center"}>
							<Text fontSize={"4xl"}>Calendar</Text>
						</Flex>
					</Box>
				</Flex>
			</Content>
		</MainLayout>
	);
};

export default Schedule;
