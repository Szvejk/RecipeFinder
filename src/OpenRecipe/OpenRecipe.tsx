import React, { useEffect, useState } from 'react';
import styles from './OpenRecipe.module.scss';
import detailsRecipe from '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface SingleRecipe {
	id:number,
	image: string;
	title: string;
	extendedIngredients: string[];
	servings: number;
	cuisines: string[];
}

const OpenRecipe = () => {
	const [detailsRecipe, setDetailsRecipes] = useState<any>({});

	const getDetails = () => {
		axios
			.get(
				`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=28e4f463047f47b9a250a32418c780c8`
			)
			.then((res) => {
				console.log(res.data);
				setDetailsRecipes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getDetails();
	}, []);

	const params = useParams();
	console.log(detailsRecipe);
	return (
		<div>
			<div className={styles.wrapper}>
				<img src={detailsRecipe.image}  className= {styles.imgRecipe}alt='' />
				<span className={styles.recipeTitle}>{detailsRecipe?.title}</span>
 <span className={styles.ingredientsText}> Ingredients:  </span>
				{
				detailsRecipe.title &&
					detailsRecipe.extendedIngredients.map((el: any, id:number) => (
						<div key={id}>
						<span className={styles.nameIngredient}> {el.name} </span></div>
					))}
					
				<span>Kuchnia: {detailsRecipe?.cuisines}</span>
				<span>Liczba porcji: {detailsRecipe?.servings}</span>
			</div>
		</div>
	);
};

export default OpenRecipe;
