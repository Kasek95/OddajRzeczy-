import React from 'react';
import { Link } from 'react-router-dom';
import './register.scss'
const Register: React.FC = () => {
	return (
		<section className='Register'>
			<div className='container registerContainer'>
				<h2>Załóż konto</h2>
				<div className='decoration'></div>
				<div className='formContainer'>
					<form className='formRegister'>
						<div className='inputContainer'>
							<label htmlFor='Email'>Email</label>
							<input id='Email'></input>
						</div>
						<div className='inputContainer'>
							<label htmlFor='Password'>Hasło</label>
							<input id='Password'></input>
						</div>
						<div className='inputContainer'>
							<label htmlFor='Password2'>Powtórz hasło</label>
							<input id='Password2'></input>
						</div>
					</form>
					<div className='btnContainer'>
						<button>
							<Link to='/Login'>Zaloguj się</Link>
						</button>
						<button>
							<Link to='/'>Załóż konto</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Register;
