import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/global-styles';
import Navbar from './components/navbar/Navbar';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Navbar />
			<Router />
		</BrowserRouter>
	);
};

export default App;
