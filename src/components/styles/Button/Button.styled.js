import styled from 'styled-components';

export const ButtonStyles = styled.button`
	border: 1px solid #dee7ec;
	border-radius: 8px;
	background-color: #7800ef;
	margin: ${(props) => props.margin_one} ${(props) => props.margin_two};
	// width: 161px;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	color: white;
	float: ${(props) => props.float};
	justify-content: center;
	align-item: center;
	cursor: ${(props) => props.cursor};
`;
