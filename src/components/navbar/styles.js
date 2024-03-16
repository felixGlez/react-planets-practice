import styled from 'styled-components';

const StyledNavbar = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 5rem;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #979797;
		opacity: 0.2;
	}
`;

const StyledLogo = styled.h1`
	font-family: 'Antonio', sans-serif;
	font-size: 1.75rem;
	font-weight: 400;
	color: #ffffff;
`;

const StyledMenuContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const StyledMenu = styled.ul`
	display: flex;
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
`;

const StyledMenuItem = styled.li`
	width: 100%;
	padding: 1rem;
	color: #ffffff;
	cursor: pointer;
	font-family: 'League Spartan', sans-serif;
	font-weight: 600;
	letter-spacing: 1px;
	opacity: 0.7;
	font-size: 0.7rem;
`;

export {
	StyledNavbar,
	StyledLogo,
	StyledMenuContainer,
	StyledMenu,
	StyledMenuItem
};
