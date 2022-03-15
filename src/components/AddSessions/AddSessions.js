import { Row, Col, Input } from 'antd';
import 'antd/dist/antd.min.css';
import { ButtonStyles } from '../styles/Button/Button.styled';
import React, { useState } from 'react';

export default function AddSessions(props) {
	const [sessions, setSessions] = useState('');
	const addSessions = () => {
		console.log('ini tambah session : ');
		props.addSessions(sessions);
		setSessions('');
	};
	return (
		<Row>
			<Col span={7}>
				<Row style={{ marginBottom: '25px' }}>Sessions</Row>
			</Col>
			<Col span={15}>
				<Row style={{ marginBottom: '20px' }}>
					<Input
						placeholder="Input Title"
						onChange={(event) => {
							const newSession = event.target.value;
							setSessions(newSession);
						}}
						value={sessions}
					/>
				</Row>

				<Row>
					<ButtonStyles
						width={'50px'}
						height={'30px'}
						float={'right'}
						cursor={'pointer'}
						onClick={() => {
							addSessions();
						}}
					>
						+
					</ButtonStyles>
				</Row>
			</Col>
		</Row>
	);
}
