import { Route, Routes } from 'react-router-dom';
import { MENU_NAVBAR } from '../constants/menu-navbar';
import Planet from '../pages/Planet';

const Router = () => {
	return (
		<Routes>
			{MENU_NAVBAR.map(menuItem => (
				<Route
					key={menuItem.id}
					path={menuItem.path}
					element={<Planet planet={menuItem.name} />}
				/>
			))}
		</Routes>
	);
};

export default Router;
