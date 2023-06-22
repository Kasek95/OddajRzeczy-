import React from 'react';
import './contact.scss';
const Contact: React.FC = () => {
	return (
		<section className='contact'>
			<article className='contactContainer container'>
                <div className='headerImg'></div>
				<div className='formContainer'>
					<h2>Skontaktuj się z nami</h2>
					<div className='decoration'></div>
					<form className='form'>
						<div className='inputContainer'>
							<div className='input'>
								<label htmlFor='Name'>Wpisz swoje imię</label>
								<input id='Name' placeholder='Krzysztof'></input>
							</div>
							<div className='input'>
								<label htmlFor='Email'>Wpisz swój email</label>
								<input id='Email' placeholder='Email'></input>
							</div>
						</div>
						<div className='textAreaContainer'>
							<label htmlFor='Message'>Wpisz swoją wiadomość</label>
							<textarea
								id='Message'
								placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
							/>
						</div>
                        <button>Wyślij</button>
					</form>
				</div>
			</article>
		</section>
	);
};

export default Contact;
