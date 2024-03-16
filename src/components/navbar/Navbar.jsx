import { v4 } from 'uuid';
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
					{MENU_NAVBAR.map(element => (
						<StyledMenuItem key={v4()}>{element.toUpperCase()}</StyledMenuItem>
					))}
				</StyledMenu>
			</StyledMenuContainer>
		</StyledNavbar>
	);
};

export default Navbar;
