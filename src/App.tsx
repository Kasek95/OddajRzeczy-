import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/homePage/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='*' element={<Navigate to='/' />}></Route>
				<Route path='/' element={<Home />}></Route>
				<Route path='/Login' element={<Login />}></Route>
				<Route path='/Register' element={<Register />}></Route>
			</Routes>
		</>
	);
};

export default App;
