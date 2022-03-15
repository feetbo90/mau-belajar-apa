import styled from 'styled-components';

export const StyleRight = styled.div`
	float: right;
	height: ${(props) => props.myHeight};
	margin-top: ${(props) => props.marginTop};
	margin-left: ${(props) => props.marginLeft};

	li {
		float: right;
		list-style: none;
	}
`;
