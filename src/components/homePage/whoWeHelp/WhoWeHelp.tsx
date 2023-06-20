import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import FundationData from './fundationData';
import './whoWeHelp.scss';

const WhoWeHelp: React.FC = () => {
	
const [fundation, setFundation] = useState(true);
	const [organization, setOrganization] = useState(false);
	const [local, setLocal] = useState(false);
	const [fundadtionPageNumber, setFundadionPageNumber] = useState(0);
	const fundationPerPage = 3;
	const fundationPageVisited = fundadtionPageNumber * fundationPerPage;
	const fundationCount = Math.ceil(FundationData.length / fundationPerPage);
	const displayFundationData = FundationData
		.slice(fundationPageVisited, fundationPageVisited + fundationPerPage)
		.map((fundation, idx) => (
			<div key={idx} className='singielFundation'>
				<div className='infoContainer'>
					<span>Fundacja {fundation.fundation}</span>
					<span>Cel i misja {fundation.for}</span>
				</div>
				<span>{fundation.item}</span>
			</div>
		));
	const pageChange = ({ selected }: any) => {
		setFundadionPageNumber(selected);
	};
	console.log(FundationData);
	return (
		<section className='whoWeHelp'>
			<article className='whoWeHelpContainer container'>
				<div className='box'>
					<h2>Komu Pomagamy?</h2>
					<div className='decoration'></div>
					<div className='organizationBox'>
						<span className={fundation ? 'span active' : 'span'}>
							Fundacjom
						</span>
						<span className={organization ? 'span active' : 'span'}>
							Organizacjom<br></br>pozarządowym
						</span>
						<span className={local ? 'span active' : 'span'}>
							Lokalnym<br></br>zbiórkom
						</span>
					</div>
					<p>
						W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
						współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
						czego potrzebują.
					</p>
					<section className='paginationSection'>
						<article className={fundation ? 'singielList show' : ''}>
							{displayFundationData}
							<ReactPaginate
								pageCount={fundationCount}
								onPageChange={pageChange}
								previousLinkClassName='previous'
								nextLinkClassName='next'
								containerClassName='paginationBtns'
								disabledClassName='paginationDisabled'
								activeClassName='paginationActive'
							/>
						</article>
					</section>
				</div>
			</article>
		</section>
	);
};

export default WhoWeHelp;
