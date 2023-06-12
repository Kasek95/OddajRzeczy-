import React from 'react';
import WelcomeSection from '../welcomSection/WelcomSection';
import InfoAboutGivaweyItem from '../infoAbouGivaweyItem/InfoAboutGivawaey';
import "./main.scss"
const Main:React.FC = () => {
	return (
        <>
         <main>
         <WelcomeSection/>
         <InfoAboutGivaweyItem/>
         </main>
         
        </>
    )
};

export default Main;
