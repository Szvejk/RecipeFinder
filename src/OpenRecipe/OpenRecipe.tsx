import React, { useEffect, useState } from 'react';
import styles from './OpenRecipe.module.scss';
import detailsRecipe from '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OpenRecipe = () => {
	const [detailsRecipe, setDetailsRecipes] = useState<any>({});

	const getDetails = () => {
		axios
			.get(
				`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=28e4f463047f47b9a250a32418c780c8`
			)
			.then((res) => {
				console.log(res.data, 'C');
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
	console.log(params);
	return (
		<div>
			<div className={styles.wrapper}>
				<span>{detailsRecipe?.title}</span>
				<img src={detailsRecipe.image} alt="" />
				<span>{detailsRecipe?.title}</span>
				<span>{detailsRecipe?.title}</span>
			</div>
		</div>
	);
};

export default OpenRecipe;
