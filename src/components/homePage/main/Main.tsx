import React from 'react';
import WelcomeSection from '../welcomSection/WelcomSection';
import InfoAboutGivaweyItem from '../infoAbouGivaweyItem/InfoAboutGivawaey';
import NextStep from '../nextStepSection/NextStep';
import HowToDo from '../howToDoItSection/HowToDo';
import AboutUs from '../aboutUs/AboutUs';
import WhoWeHelp from '../whoWeHelp/WhoWeHelp';
import './main.scss';
const Main: React.FC = () => {
	return (
		<>
			<main>
				<WelcomeSection />
				<InfoAboutGivaweyItem />
				<NextStep />
				<HowToDo />
				<AboutUs />
				<WhoWeHelp />
			</main>
		</>
	);
};

export default Main;
