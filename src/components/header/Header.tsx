import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header: React.FC = () => {
	return (
		<header>
			<div className='navContainer'>
				<nav className='actionUser'>
					<Link to="/Login">Zaloguj</Link>
					<Link to="/Register">Załóż Konto</Link>
				</nav>
				<nav className='navigation'>
					<a href='start'>Start</a>
					<a href='OcoChodzi'>O co chodzi?</a>
					<a href='Onas'>O nas</a>
					<a href='fundacja'>Fundacja i organizacje</a>
					<a href='Kontakt'>Kontakt</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
