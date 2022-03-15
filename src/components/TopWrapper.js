import React from 'react';
import {
	TopWrapperLeft,
	TopWrapperMain,
	TopWrapperRight,
	Button,
} from './styles/TopWrapper.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
export default function TopWrapper() {
	return (
		<TopWrapperMain>
			<TopWrapperLeft>
				<ul>
					<li>
						<h6>Belajar dan praktek cinematic videography</h6>
					</li>
					<li>
						<p>Last edited 18 October 2021 | 13:23</p>
					</li>
				</ul>
			</TopWrapperLeft>
			<TopWrapperRight>
				<Button>
					<span>
						<FontAwesomeIcon icon={faEye} />
					</span>
					Preview
				</Button>
			</TopWrapperRight>
		</TopWrapperMain>
	);
}
