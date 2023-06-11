import React from 'react';
import { Link } from 'react-router-dom';
import './welcomSection.scss';
const WelcomeSection: React.FC = () => {
	return (
		<section className='welcomSection container'>
			<div className='hero-img'></div>
			<article className='info'>
				<span>Zacznij pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</span>
				<div className='decoration'></div>
				<div className='buttonContainer'>
					<button>
						<Link to='/OddajRzeczy'>Oddaj<br></br>Rzeczy</Link>
					</button>
					<button>
						<Link to='/ZorganizujZbiórkę'>Zorganizuj Zbiórkę</Link>
					</button>
				</div>
			</article>
		</section>
	);
};

export default WelcomeSection;
