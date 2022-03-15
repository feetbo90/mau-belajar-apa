import styled from 'styled-components';

export const Curriculum = styled.div`
	background-color: ${({ theme }) => theme.colors.body};
	width: 100%;
	padding: 5px 50px 40px 70px;
	float: left;
	height: 20px;
	font-family: 'SF Pro Display', sans-serif;

	p {
		font-family: 'SF Pro Display', sans-serif;
		font-size: 13px;
		line-height: 20px;
		color: ${({ theme }) => theme.colors.button_color};
	}
`;

export const BorderBottom = styled.div`
	border-bottom: 2px solid #dee7ec;
	padding-bottom: 20px;
	position: relative;
`;

export const BorderBottomBlue = styled.div`
	// margin-top: -15px
	border-bottom: 2px solid ${({ theme }) => theme.colors.button_color};
	width: 90px;
	position: absolute;
	padding-bottom: 20px;
`;
