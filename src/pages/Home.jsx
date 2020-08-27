import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';

function Home() {
	const { items } = useSelector(({ pizzas, filters }) => {
		return {
			items: pizzas.items,
		};
	});

	React.useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			console.log('requesting data from server');
		});
	}, []);

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					onClickItem={(name) => console.log(name)}
					items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
				/>
				<SortPopup
					items={[
						{ name: 'популярности', type: 'popular' },
						{ name: 'цене', type: 'price' },
						{ name: 'алфавиту', type: 'alphabet' },
					]}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	);
}

export default Home;
