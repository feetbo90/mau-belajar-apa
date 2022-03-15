import styled from 'styled-components';

export const ImagesStyled = styled.img`
	// margin-top: 10px;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin-right: ${(props) => props.marginRight};
	// opacity: 0.3;
	cursor: grab;
	float: left;
`;
