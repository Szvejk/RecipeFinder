import React, { useState } from 'react';
import Header from './Header/Header';
import styles from './App.module.scss';
import MainView from './Main/MainView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpenRecipe from './OpenRecipe/OpenRecipe';
import Favourite from './Favourite/Favourite';

interface RecipeFav {
	title: string;
	image: string;
}

const App = () => {
	const [fav, setFav] = useState<RecipeFav[]>([]);

	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainView />} />
				<Route
					path='/details/:id'
					element={<OpenRecipe setFav={setFav} fav={fav} />}
				/>
				<Route
					path='/details/fav'
					element={<Favourite fav={fav} setFav={setFav} />}
				/>

				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
		</Router>
	);
};

export default App;

// spakowac to w 1 plik i zaciagac
