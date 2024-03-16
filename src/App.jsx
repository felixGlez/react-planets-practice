import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Navbar />
			<Body />
		</>
	);
};

export default App;
