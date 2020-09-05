import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages/';
import { Route } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas';

function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		// Перенести в Redux и подключить redux-thunk.
		// Следить за фильтрацией и сортировкой и подставлять параметры в URL из Redux.
		// Сделать иммитацию загрузки пицц (которая есть в CSS и в PizzaBlock).
		axios.get('http://localhost:3001/pizzas').then(({ data }) => {
			dispatch(setPizzas(data));
		});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route path="/" component={Home} exact />
				<Route path="/cart" component={Cart} exact />
			</div>
		</div>
	);
}

export default App;
