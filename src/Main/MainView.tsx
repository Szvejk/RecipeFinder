import React, { useState, useEffect } from 'react';
import styles from './MainView.module.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

interface Recipe {
	id: number;
	vegetarian: string;
	vegan: string;
	title: string;
	cuisines: string[];
	image: string;
}

const testData = [
	{
		id: 633258,
		title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
		image: 'https://spoonacular.com/recipeImages/632572-556x370.jpg',

		cuisines: ['American'],
		vegan: 'false',
		vegetarian: 'true',
	},
	{
		id: 632572,
		title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
		image: 'https://spoonacular.com/recipeImages/633258-556x370.jpg',
		cuisines: ['Mediterranean', 'Italian', 'European'],
		vegan: 'false',
		vegetarian: 'true',
	},
];

const MainView = () => {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [query, setQuery] = useState('');

	const info = () => {
		axios
			.get(
				'https://api.spoonacular.com/recipes/random?number=12&apiKey=28e4f463047f47b9a250a32418c780c8'
			)
			.then((res) => {
				console.log(res.data.recipes);
				setRecipes(res.data.recipes);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		info();
	}, []);

	return (
		<>
			<Header />
			<section className={styles.wrapperMain}>
				<div className={styles.searchPart}>
					<h3 className={styles.mainTitle}>Search</h3>
					<span>Search results for</span>
					<div className={styles.flexInputWithButton}>
						<input
							type='text'
							className={styles.inputSearch}
							placeholder='Enter search text'
							onChange={(el) => setQuery(el.target.value)}
						/>
						<button onClick={() => info()} className={styles.buttonSearch}>
							Search
						</button>
					</div>
				</div>

				<section className={styles.allWrapped}>
					{recipes.length
						? recipes
								.filter((el: Recipe) =>
									el.title.toLowerCase().includes(query.toLowerCase())
								)
								.map((el: Recipe, index: number) => (
									<Link
										key={index}
										to={`/details/${el.id}`}
										className={styles.titleofRecipe}
									>
										<div className={styles.oneRecipeMain}>
											<span className={styles.titleRecipe}>{el.title}</span>
											<img className={styles.imgDiv} src={el.image} />
											<span>{el.vegetarian}</span>
											<span>{el.vegan}</span>
											<span>{el.cuisines + ' '}</span>
										</div>
									</Link>
								))
						: null}
				</section>
			</section>
		</>
	);
};
export default MainView;
