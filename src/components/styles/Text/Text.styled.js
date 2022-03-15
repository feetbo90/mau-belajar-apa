import styled from 'styled-components';

export const TextStyled = styled.h6`
	font-weight: normal;
	margin: ${(props) => props.margin_one} ${(props) => props.margin_two};
	justify-content: center;
	align-item: center;
	color: ${(props) => props.color};
	// float: left;
`;
