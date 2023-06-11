import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
const Login: React.FC = () => {
	return (
		<section className='login'>
			<div className='container loginContainer'>
				<h2>Zaloguj Się</h2>
				<div className='decoration'></div>
				<div className='formContainer'>
					<form>
						<div className='inputContainer'>
							<label htmlFor='Email'>Email</label>
							<input id='Email'></input>
						</div>
						<div className='inputContainer'>
							<label htmlFor='Password'>Hasło</label>
							<input id='Password'></input>
						</div>
					</form>
					<div className='btnContainer'>
						<button>
							<Link to='/Register'>Załóż Konto</Link>
						</button>
						<button>
							<Link to='/OddajRzeczy'>Zaloguj Się</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
