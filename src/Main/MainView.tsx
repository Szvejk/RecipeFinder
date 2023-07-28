import React, { useState, useEffect } from 'react';
import styles from './MainView.module.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { recipesList } from '../base';

import Header from '../Header/Header';

interface Recipe {
	id: number;
	vegetarian: string;
	vegan: string;
	title: string;
	cuisines: string[];
	image: string;
}


const MainView = () => {
	const [recipes, setRecipes] = useState<any>(recipesList);
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
					<span className={styles.searcher}>Search results for</span>
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
