import React, {useState, useEffect} from 'react';
import styles from './MainView.module.scss';
import axios from 'axios';
const MainView = () => {
const [recipe, setRecipe] = useState('')

useEffect(() => {
    info();
}, []);

const info = () => {
    axios
        .get('https://api.spoonacular.com/recipes/random/?apiKey=28e4f463047f47b9a250a32418c780c8')
        .then((res) => {
            console.log(res.data.recipes);
           
        })
        .catch((err) => {
            console.log(err);
        });
};



	return (
		<>
			<div className={styles.wrapperPart}>
				<div className={styles.searchPart}>
					<h3 className={styles.mainTitle}>Search</h3>
					<span>Search results for</span>
					<div className={styles.flexInputWithButton}>
						<input
							type='text'
							className={styles.inputSearch}
							placeholder='Enter search text'
						/>{' '}
						<button className={styles.buttonSearch}> Search</button>
					</div>
				</div>
			</div>
           
		</>
	);
};

export default MainView;
