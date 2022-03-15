import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${(props) => props.color};
	height: 60px;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;
`;

export const StyleHeaderLeft = styled.div`
	float: left;
	height: 20px;
	margin-top: 20px;
	margin-left: 10px;

	li {
		float: left;
		list-style: none;
	}
`;

export const Logo = styled.img`
	width: 124px;
	margin-top: 20px;
`;

export const BorderLine = styled.span`
	border: 1px solid #bcc0d0;
	height: 70px;
	margin: 0 20px;
`;

export const Span = styled.span`
	// fa
	margin-right: 5px;

	//  menu-icon
	color: white;
	float: right;
	font-size: 25px;
	padding: 21px 0;
	display: none;
`;
