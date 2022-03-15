import React from 'react';
import {
	BorderBottom,
	BorderBottomBlue,
	Curriculum,
} from './styles/MiddleWrapper.styled';

export default function MiddleWrapper() {
	return (
		<Curriculum>
			<p>Curriculum</p>
			<BorderBottom>
				<BorderBottomBlue />
			</BorderBottom>
		</Curriculum>
	);
}
