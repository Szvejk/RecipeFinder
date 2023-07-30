import React from 'react';
import styles from './Favourite.module.scss';

import { RecipeFav } from '../Interfaces';

interface Props {
	fav: RecipeFav[];
	setFav: React.Dispatch<React.SetStateAction<RecipeFav[]>>;
}

const Favourite = ({ fav, setFav }: Props) => {
	const remove = (index: number) => setFav(fav.filter((_, i) => i !== index));

	return (
		<div className={styles.favouriteWrapper}>
			<span className={styles.listOfFavourities}>
				Lista ulubionych przepisów
			</span>
			{fav
				? fav.map((el, index) => (
						<>
							<div className={styles.favList}>
								<div key={`el${index}`} className={styles.recipewithButton}>
									<span> {el.title}</span>
									<img
										className={styles.imageRecipeDetails}
										src={el.image}
										alt=''
									/>{' '}
									<button
										className={styles.removeButton}
										onClick={() => remove(index)}
									>
										USUŃ
									</button>
								</div>
							</div>{' '}
						</>
				  ))
				: null}
		</div>
	);
};

export default Favourite;
