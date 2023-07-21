import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Content from "../components/layouts/Content";
import Navigation from "../components/layouts/Navigation";
import HeaderContent from "../components/fragments/HeaderContent";
const Schedule = () => {
	return (
		<MainLayout>
			<Navigation />
			<Content>
				<HeaderContent />
			</Content>
		</MainLayout>
	);
};

export default Schedule;
