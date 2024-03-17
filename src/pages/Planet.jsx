import { useState } from 'react';
import { MENU_TABS } from '../constants/menu-tabs';
import { PLANETS_INFO } from '../constants/planets';
import {
	StyledContainer,
	StyledImg,
	StyledPlanetImg,
	StyledPlanetInfo,
	StyledPlanetName,
	StyledPlanetText,
	StyledStats,
	StyledStatsContainer,
	StyledTab,
	StyledTabsContainer
} from './styles';

const Planet = ({ planet }) => {
	const [tabActive, setTabActive] = useState(0);

	return (
		<>
			<StyledContainer>
				<StyledPlanetImg>
					<StyledImg src={PLANETS_INFO[planet].images[tabActive]} />
				</StyledPlanetImg>
				<StyledPlanetInfo>
					<StyledPlanetName>{planet}</StyledPlanetName>
					<StyledPlanetText>
						{PLANETS_INFO[planet].info[tabActive]}
					</StyledPlanetText>
					<StyledPlanetText>
						Source: <b>Wikipedia</b>
						<img src='./assets/icon-source.svg' alt='Wikipedia' />
					</StyledPlanetText>
					<StyledTabsContainer>
						{MENU_TABS.map((menuItem, index) => (
							<StyledTab
								key={menuItem.id}
								onClick={() => setTabActive(index)}
								$planetColor={PLANETS_INFO[planet].$planetColor}
								$isActive={index === tabActive}
							>
								<p>{menuItem.name}</p>
							</StyledTab>
						))}
					</StyledTabsContainer>
				</StyledPlanetInfo>
			</StyledContainer>
			<StyledStatsContainer>
				{PLANETS_INFO[planet].stats.map(stat => (
					<StyledStats key={stat.id}>
						<p>{stat.title}</p>
					</StyledStats>
				))}
			</StyledStatsContainer>
		</>
	);
};

export default Planet;
