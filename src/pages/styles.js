import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 3rem;
`;

const StyledPlanetImg = styled.div`
	width: 50%;
	height: 30rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImg = styled.img`
	max-width: 30rem;
`;

const StyledPlanetInfo = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const StyledPlanetName = styled.h1`
	font-family: 'Antonio', sans-serif;
	font-size: 5rem;
	font-weight: 400;
	color: #ffffff;
	margin-bottom: 0;
`;

const StyledPlanetText = styled.p`
	width: 50%;
	font-family: 'League Spartan', sans-serif;
	font-size: 1.1rem;
	font-weight: 100;
	line-height: 1.5rem;
	color: #ffffff;
`;

const StyledTabsContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledTab = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0px 30px 0px 30px;
	background-color: ${({ $isActive, $planetColor }) =>
		$isActive && $planetColor};
	border: ${({ $isActive }) => !$isActive && '1px solid #313148'};
	color: #ffffff;
	font-family: 'League Spartan', sans-serif;
	font-weight: 600;
	letter-spacing: 3px;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		background-color: ${({ $isActive }) => !$isActive && '#313148'};
	}
`;

const StyledStatsContainer = styled.div`
	width: 100%;
	display: flex;
`;

const StyledStats = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	border: 1px solid white;
	color: white;
`;

export {
	StyledContainer,
	StyledPlanetImg,
	StyledImg,
	StyledPlanetInfo,
	StyledPlanetName,
	StyledPlanetText,
	StyledTabsContainer,
	StyledTab,
	StyledStatsContainer,
	StyledStats
};
