import React from 'react';
import {
	StyledHeader,
	StyleHeaderLeft,
	BorderLine,
} from './styles/Header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from './styles/Container.styled';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	return (
		<StyledHeader color={props.color}>
			<Container>
				<StyleHeaderLeft>
					<ul>
						<li>
							<FontAwesomeIcon icon={faArrowLeftLong} size="xs" />
						</li>
						<li>
							<BorderLine />
						</li>
						<li>Event</li>
					</ul>
				</StyleHeaderLeft>
			</Container>
		</StyledHeader>
	);
}

export default Header;
