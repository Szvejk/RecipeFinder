import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.parentContainer}>
	
			<img
				src='https://www.bhf.org.uk/assets/img/mvc/scp-hero-curve.svg?v=DQiDqsMAhx0Qo4tI1y6Gkn681ETM1YA7gecLL1qbRaE='
				className={styles.redElement}
				alt=''
			/>
			<div className={styles.textHeader}>
				<h1 className={styles.centerTitle}>Recipe search</h1>
				<p className={styles.headerParagraph}>
					Our recipe finder contains hundreds of heart healthy recipes with full
					nutritional analysis.
				</p>
			</div>
		</div>
	);
};

export default Header;
