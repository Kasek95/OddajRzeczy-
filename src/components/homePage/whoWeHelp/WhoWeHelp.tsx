import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import FundationData from './fundationData';
import organizationData from './organizationData';
import localData from './localData';
import './whoWeHelp.scss';

const WhoWeHelp: React.FC = () => {
	const [fundation, setFundation] = useState(true);
	const [organization, setOrganization] = useState(false);
	const [local, setLocal] = useState(false);
	const [fundadtionPageNumber, setFundadionPageNumber] = useState(0);
	const [organizationPageNumber, setOrganizationPageNumber] = useState(0);
	const displayLocal = () => {
		setLocal(true);
		setOrganization(false);
		setFundation(false);
	};
	const displayFundation = () => {
		setLocal(false);
		setOrganization(false);
		setFundation(true);
	};
	const displayOrganization = () => {
		setLocal(false);
		setOrganization(true);
		setFundation(false);
	};
	//Fundation//
	const fundationPerPage = 3;
	const fundationPageVisited = fundadtionPageNumber * fundationPerPage;
	const fundationCount = Math.ceil(FundationData.length / fundationPerPage);
	const displayFundationData = FundationData.slice(
		fundationPageVisited,
		fundationPageVisited + fundationPerPage
	).map((fundation, idx) => (
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
	//End Fundation//
	//Start Organization//
	const organizationPerPage = 3;
	const organizationVisited = organizationPerPage * organizationPageNumber;
	const organizationCount = Math.ceil(
		organizationData.length / organizationPerPage
	);
	const displayOrganizationData = organizationData
		.slice(organizationVisited, organizationVisited + organizationPerPage)
		.map((el, idx) => (
			<div key={idx} className='singielFundation'>
				<div className='infoContainer'>
					<span>{el.organization}</span>
					<span>{el.for}</span>
				</div>
				<span>{el.item}</span>
			</div>
		));
	const organizationChange = ({ selected }: any) => {
		setOrganizationPageNumber(selected);
	};
	return (
		<section className='whoWeHelp'>
			<article className='whoWeHelpContainer container'>
				<div className='box'>
					<h2>Komu Pomagamy?</h2>
					<div className='decoration'></div>
					<div className='organizationBox'>
						<span
							onClick={displayFundation}
							className={fundation ? 'span active' : 'span'}
						>
							Fundacjom
						</span>
						<span
							onClick={displayOrganization}
							className={organization ? 'span active' : 'span'}
						>
							Organizacjom<br></br>pozarządowym
						</span>
						<span
							onClick={displayLocal}
							className={local ? 'span active' : 'span'}
						>
							Lokalnym<br></br>zbiórkom
						</span>
					</div>
					{fundation ? (
						<p>
							W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
							którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu
							pomagają i czego potrzebują.
						</p>
					) : (
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation.
						</p>
					)}
					<section className='paginationSection'>
						<article className={fundation ? 'singielList show' : 'hide'}>
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
						<article className={local ? 'singielList show' : 'hide'}>
							{localData.map((el, idx) => (
								<div key={idx} className='singielFundation'>
									<div className='infoContainer'>
										<span> {el.for}</span>
										<span>{el.info}</span>
									</div>
									<span>{el.item}</span>
								</div>
							))}
						</article>
					    <article className={organization ? 'singielList show' : "hide"}>
							{displayOrganizationData}
							<ReactPaginate
								pageCount={organizationCount}
								onPageChange={organizationChange}
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
