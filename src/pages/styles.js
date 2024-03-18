import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 3rem;
	margin-bottom: 4rem;
`;

const StyledPlanetImg = styled.div`
	width: 50%;
	height: 30rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const StyledImg = styled.img`
	max-width: 30rem;
`;

const StyledImgGeology = styled.img`
	width: 120px;
	position: absolute;
	top: 18rem;
	left: 50%; // 50% de la medida del padre
	transform: translateX(-50%); // -50% de la medida del StyledImgGeology
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
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

const StyledStats = styled.div`
	width: 15%;
	display: flex;
	flex-direction: column;
	border: 1px solid #313148;
	color: white;
	padding: 30px;
`;

const StyledStatTitle = styled.h2`
	font-family: 'League Spartan', sans-serif;
	font-size: 0.8rem;
	font-weight: 400;
	letter-spacing: 3px;
	color: #555567;
	margin-top: 0;
	margin-bottom: 0;
`;

const StyledStatStat = styled.p`
	font-family: 'Antonio', sans-serif;
	font-size: 2.5rem;
	font-weight: 400;
	color: #ffffff;
	margin-bottom: 0;
	margin-top: 0;
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
	StyledStats,
	StyledStatTitle,
	StyledStatStat,
	StyledImgGeology
};
