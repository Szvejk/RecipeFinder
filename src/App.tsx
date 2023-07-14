import React, { useState } from 'react';
import Header from './Header/Header';
import styles from './App.module.scss';
import MainView from './Main/MainView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpenRecipe from './OpenRecipe/OpenRecipe';

interface UserData {
	recipe: {
		vegetarian: string;
		vegan: string;
		orginalName: string;
		title: string;
		servings: number;
		summary: string;
		ingredients: { orginal: string };
		cuisines: string;
		image: string;
		instructions: string;
	};
}

const App = () => {
	const [detailsRecipe, setdetailsRecipe] = useState<UserData | null>(null);
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<MainView setdetailsRecipe={setdetailsRecipe} />}
				/>
				<Route
					path='/details'
					element={<OpenRecipe detailsRecipe={detailsRecipe} />}
				/>

				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
		</Router>
	);
};

export default App;
