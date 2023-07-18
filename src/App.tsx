import React, { useState } from 'react';
import Header from './Header/Header';
import styles from './App.module.scss';
import MainView from './Main/MainView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpenRecipe from './OpenRecipe/OpenRecipe';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainView />} />
				<Route path='/details/:id' element={<OpenRecipe />} />

				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
		</Router>
	);
};

export default App;

// spakowac to w 1 plik i zaciagac
