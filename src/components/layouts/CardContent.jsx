import React from "react";

const CardContent = () => {
	return (
		<Card boxShadow={"md"} px={3} w={"full"}>
			<CardHeader>
				<HStack fontSize={18} pl={1}>
					<Icon as={BiCalendarCheck} boxSize={"7"} />
					<Text>Attandance Report</Text>
				</HStack>
			</CardHeader>

			<CardBody display={"flex"} justifyContent={"space-between"}>
				<Box display={"flex"} flexDir={"column"} gap={5} w={"45%"}>
					<ChartBar
						data={dataAttandance}
						options={optionsAttandance}
						title={"Total Employee"}
						isUptren={true}
					/>
					<SingleBarLayout>
						<ChartSingleBar data={dataPresence} options={optionsPresence} />
					</SingleBarLayout>
				</Box>
				<Divider
					orientation="vertical"
					h={"auto"}
					borderWidth={2}
					borderColor={"gray.300"}
					rounded={"3xl"}
				/>
				<Box w={"50%"}>
					<Box p={5} h={"full"}>
						<Flex
							justifyContent={"space-between"}
							fontWeight={"medium"}
							color={"gray.500"}
						>
							<Box>
								<Text fontSize={"2xl"}>All User Statistic</Text>
								<Text fontSize={"3xl"} color={"blackAlpha.700"}>
									25,256
									<Text as={"span"} fontSize={"xl"} pl={1} color={"gray.600"}>
										Users
									</Text>
								</Text>
							</Box>
							<Box>
								<Text fontSize={"2xl"}>Average Visit Times</Text>
								<Text fontSize={"3xl"} color={"blackAlpha.700"}>
									2
									<Text as={"span"} fontSize={"xl"} pl={1} color={"gray.600"}>
										Hours
									</Text>
									<Text as={"span"} fontSize={"3xl"} pl={1}>
										35
									</Text>
									<Text as={"span"} fontSize={"xl"} pl={1} color={"gray.600"}>
										Minutes
									</Text>
								</Text>
							</Box>
						</Flex>
						<Box pt={10}>
							<Text fontSize={"2xl"} color={"GrayText"} fontWeight={"medium"}>
								Top Visited Area
							</Text>
							<ChartSingleBar data={dataVisitedArea} options={optionsVisitedArea} />
							<Grid
								gridTemplateColumns={"auto"}
								gridTemplateRows={"repeat(3,2.5em)"}
								gridAutoFlow={"column"}
							>
								{dataVisitedArea.datasets.map((data, i) => {
									return (
										<Box key={i}>
											<Flex gap={2} alignItems={"center"}>
												<Box w={4} h={4} bg={data.backgroundColor}></Box>
												<Box>{data.label}</Box>
											</Flex>
										</Box>
									);
								})}
							</Grid>
							<Flex justifyContent={"end"}>
								<Text
									color={"blue.500"}
									_hover={{ color: "blue.400" }}
									fontWeight={"medium"}
								>
									<Link to={"/attandance"} color="red.200">
										Go to Attandance
									</Link>
								</Text>
							</Flex>
						</Box>
					</Box>
				</Box>
			</CardBody>
		</Card>
	);
};

export default CardContent;
