import { Link } from 'react-router-dom';
import { MENU_NAVBAR } from '../../constants/menu-navbar';
import {
	StyledLogo,
	StyledMenu,
	StyledMenuContainer,
	StyledMenuItem,
	StyledNavbar
} from './styles';

const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledLogo>THE PLANETS</StyledLogo>
			<StyledMenuContainer>
				<StyledMenu>
					{MENU_NAVBAR.map(menuItem => (
						<StyledMenuItem key={menuItem.id}>
							<Link to={menuItem.path}>{menuItem.name}</Link>
						</StyledMenuItem>
					))}
				</StyledMenu>
			</StyledMenuContainer>
		</StyledNavbar>
	);
};

export default Navbar;
