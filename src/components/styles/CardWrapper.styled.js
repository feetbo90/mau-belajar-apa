import styled from 'styled-components';

export const CardWrapperStyles = styled.div`
	background-color: ${({ theme }) => theme.colors.body};
	// margin-top: 10px;
	width: 100%;
	padding: 25px 50px 40px 70px;
	float: left;
	height: 100px;
`;

export const CardSimple = styled.div`
	width: 100%;
	border: 1px solid #dee7ec;
	border-radius: 8px;
	height: 50px;
	padding: 12px 20px;

	p {
		font-family: 'SF Pro Display', sans-serif;
		font-size: 13px;
		line-height: 20px;
		color: 'black';
	}
`;
