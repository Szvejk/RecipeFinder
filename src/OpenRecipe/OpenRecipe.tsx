import React, { useEffect, useRef, useState } from 'react';
import styles from './OpenRecipe.module.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Favourite from '../Favourite/Favourite';
import { RecipeFav } from '../Interfaces';

interface SingleRecipe {
	id: number;
	image: string;
	title: string;
	extendedIngredients: string[];
	servings: number;
	cuisines: string[];
	instructions: string;
}

interface Props {
	setFav: React.Dispatch<React.SetStateAction<RecipeFav[]>>;
	fav: RecipeFav[];
}

const OpenRecipe = ({ setFav, fav }: Props) => {
	const [detailsRecipe, setDetailsRecipes] = useState<any>([]);
	const [showFav, setShowFav] = useState(false);
	const divText = useRef<HTMLDivElement>(null);

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

	useEffect(() => {
		if (detailsRecipe.instructions) {
			divText.current!.innerHTML = detailsRecipe.instructions;
		}
	}, [getDetails]);

	const params = useParams();
	console.log(detailsRecipe);
	return (
		<>
			<div className={styles.wrapper}>
				<div onClick={() => setShowFav((prev) => !prev)}>
					{' '}
					{!showFav ? (
						<>
							<div className={styles.showRecipe}>
								<Favourite fav={fav} setFav={setFav} />
							</div>
						</>
					) : (
						<button className={styles.ulubione}>
							<span> Ulubione </span>
						</button>
					)}
				</div>
				<div className={styles.ingredients}>
					<span className={styles.ingredientsText}> Ingredients: </span>
					{detailsRecipe.title &&
						detailsRecipe.extendedIngredients.map((el: any, id: number) => (
							<div key={id}>
								<span className={styles.nameIngredient}> {el.name} </span>
							</div>
						))}{' '}
					<button
						className={styles.favAdd}
						onClick={() => {
							if (!fav.find((el) => el.title === detailsRecipe.title)) {
								setFav((prev) => [
									...prev,
									{ title: detailsRecipe.title, image: detailsRecipe.image },
								]);
							}
						}}
					>
						Add to favourite
					</button>
				</div>
				<div className={styles.wrap}>
					<img src={detailsRecipe.image} className={styles.imgRecipe} alt='' />
					<div className={styles.textRecipe}>
						<span className={styles.recipeTitle}>{detailsRecipe?.title}</span>
						<span>Cuisine: {detailsRecipe?.cuisines + ' '}</span>
						<span>Servings: {detailsRecipe?.servings}</span>
						<span> Ready in {detailsRecipe?.readyInMinutes} minutes!</span>
					</div>{' '}
				</div>{' '}
			</div>
			<div className={styles.instructions}>
				<div className={styles.paragraphInstructions}>
					<b> Instructions: </b>
					<div ref={divText} className={styles.instructionsText}></div>
				</div>
			</div>{' '}
		</>
	);
};

export default OpenRecipe;
