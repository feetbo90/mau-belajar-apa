import styled from 'styled-components';

export const TopWrapperMain = styled.div`
	@import url('http://fonts.cdnfonts.com/css/sf-pro-display');
	padding: 90px 40px 60px 60px;
	background-color: ${({ theme }) => theme.colors.body};
	background-image: linear-gradient(
		180deg,
		#b5fffc 2%,
		#ffffff 100%,
		#ffffff 100%
	);
`;

export const TopWrapperLeft = styled.div`
	float: left;
	height: 20px;
	li {
		float: left;
		list-style: none;
		margin: 0 10px;
	}
	h6 {
		font-family: 'SF Pro Display', sans-serif;
		font-size: 20px;
		line-height: 20px;
		font-weight: normal;
	}
	p {
		font-family: 'SF Pro Display', sans-serif;
		font-size: 10px;
		line-height: 20px;
		color: #8189a2;
	}
`;

export const TopWrapperRight = styled.div`
	float: right;
	height: 20px;
`;

export const Button = styled.button`
	font-size: 10px;
	margin: 1em;
	border-radius: 3px;
	padding: 5px 5px;
	color: ${({ theme }) => theme.colors.button_color};
	border: 1px solid ${({ theme }) => theme.colors.button_color};
	font-family: 'SF Pro Display', sans-serif;

	span {
		margin-right: 7px;
	}
`;
