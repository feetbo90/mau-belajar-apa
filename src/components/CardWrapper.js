import React from 'react';
import { CardSimple, CardWrapperStyles } from './styles/CardWrapper.styled';

export default function CardWrapper() {
	return (
		<CardWrapperStyles>
			<CardSimple>
				<p>Event Schedule: 24 Oktober 2021, 16:30</p>
			</CardSimple>
		</CardWrapperStyles>
	);
}
