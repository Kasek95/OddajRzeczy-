import React, { useState } from 'react';
import './whoWeHelp.scss';

const WhoWeHelp: React.FC = () => {
	return (
		<section className='whoWeHelp'>
			<article className='whoWeHelpContainer container'>
				<div className='box'>
					<h2>Komu Pomagamy?</h2>
					<div className='decoration'></div>
					<div className='organizationBox'>
						<span>Fundacjom</span>
						<span>
							Organizacjom<br></br>pozarządowym
						</span>
						<span>
							Lokalnym<br></br>zbiórkom
						</span>
					</div>
					<p>
						W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
						współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
						czego potrzebują.
					</p>
				</div>
			</article>
		</section>
	);
};

export default WhoWeHelp;
