import React, { useState, useEffect } from 'react';
import styles from './MainView.module.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
interface Props {
	setdetailsRecipe: React.Dispatch<React.SetStateAction<UserData | null>>;
}

interface UserData {
	recipe: {
		vegetarian: string;
		vegan: string;
		orginalName: string;
		title: string;
		servings: number;
		summary: string;
		ingredients: { orginal: string };
		instructions: string;
		cuisines: string;
		image: string;
	};
}
interface queryInterface {
	vegetarian: string;
	vegan: string;
	image: string;
	cuisines: string;
	title: string;
}

const MainView = ({ setdetailsRecipe }: Props) => {
	const navigate = useNavigate();
	useEffect(() => {
		info();
	}, []);
	const [recipes, setRecipes] = useState<any>([]);
	const [query, setQuery] = useState<any>('');

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
						/>{' '}
						<button onClick={() => info()} className={styles.buttonSearch}>
							{' '}
							Search
						</button>
					</div>
				</div>

				<section className={styles.allWrapped}>
					{recipes.length
						? recipes
								.filter((el: queryInterface) =>
									el.title.toLowerCase().includes(query.toLowerCase())
								)
								.map((el: queryInterface, index: number) => (
									<Link to='/details'>
										<div
											key={index}
											className={styles.oneRecipeMain}
											onClick={() => setdetailsRecipe(recipes)}
										>
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
