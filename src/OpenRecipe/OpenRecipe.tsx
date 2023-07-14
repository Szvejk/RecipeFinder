import React from 'react';
import styles from './OpenRecipe.module.scss';

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

interface Props {
	detailsRecipe: UserData | null;
}

const OpenRecipe = ({ detailsRecipe }: Props) => {
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.infoAboutUser}>
					<span>
						{detailsRecipe?.recipe.title} {detailsRecipe?.recipe.orginalName}
					</span>

					<span> {detailsRecipe?.recipe.vegetarian} </span>
					<span>{detailsRecipe?.recipe.servings}</span>
					<span> {detailsRecipe?.recipe.summary}</span>
					<span> {detailsRecipe?.recipe.ingredients.orginal}</span>
					<span> {detailsRecipe?.recipe.cuisines}</span>
					<img src={detailsRecipe?.recipe.image} alt='' />
				</div>
			</div>
		</div>
	);
};

export default OpenRecipe;
