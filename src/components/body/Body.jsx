import PlanetImg from '../planet-img/PlanetImg';
import PlanetInfo from '../planet-info/PlanetInfo';
import Planet from '../planet/Planet';
import Stats from '../stats/Stats';
import { StyledBody, StyledPlanetImg } from './styles';

const Body = () => {
	return (
		<StyledBody>
			<Planet>
				<PlanetImg>
					<StyledPlanetImg src='./assets/planet-mercury.svg' />
				</PlanetImg>
				<PlanetInfo />
			</Planet>
			<Stats />
		</StyledBody>
	);
};

export default Body;
