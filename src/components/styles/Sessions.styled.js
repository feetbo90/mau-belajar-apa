import styled from 'styled-components';

export const SessionsStyled = styled.div`
	background-color: ${({ theme }) => theme.colors.body};
	// margin-top: 10px;
	width: 100%;
	padding: 0 50px 50px 70px;
	float: left;
	height: 100%;
	// h6 {
	// 	margin: 10px 10px;
	// }
`;

export const SessionSimpleStyled = styled.div`
	width: 100%;
	border: 1px solid #dee7ec;
	border-radius: 8px;
	height: 100%;
	padding: 12px 20px;
	margin 10px 0;

	// p {
	// 	font-family: 'SF Pro Display', sans-serif;
	// 	font-size: 13px;
	// 	line-height: 20px;
	// 	color: 'black';
	// }
`;

export const SessionButtonStyled = styled.div`
	width: 100%;
	height: 100%;
`;
