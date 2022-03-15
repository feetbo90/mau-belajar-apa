import styled from 'styled-components';

export const StyledFirst = styled.div`
	background-color: ${(props) => props.color};
	height: ${(props) => props.height};
	width: 100%;
`;

export const StyleLeft = styled.div`
	float: left;
	height: ${(props) => props.myHeight};
	margin-top: ${(props) => props.marginTop};
	margin-left: ${(props) => props.marginLeft};
	li {
		float: left;
		list-style: none;
	}
`;
