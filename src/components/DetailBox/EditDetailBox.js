import { Row, Col, Input } from 'antd';
import 'antd/dist/antd.min.css';
import { ButtonStyles } from '../styles/Button/Button.styled';
import React, { useState } from 'react';

export default function EditDetailBox(props) {
	const [data, setData] = useState({
		title: props.mySubList.judul,
		date: props.mySubList.tanggal,
		hours: props.mySubList.time,
	});

	const editLessons = () => {
		props.editLesson(data);
	};
	return (
		<Row>
			<Col span={7}>
				<Row style={{ marginBottom: '25px' }}>Title</Row>
				<Row style={{ marginBottom: '25px' }}>Date</Row>
				<Row style={{ marginBottom: '25px' }}>Hours</Row>
			</Col>
			<Col span={15}>
				<Row style={{ marginBottom: '20px' }}>
					<Input
						placeholder="Input Title"
						value={data.title}
						onChange={(event) => {
							const newTitle = event.target.value;
							setData((prevData) => ({
								title: newTitle,
								date: prevData.date,
								hours: prevData.hours,
							}));
						}}
					/>
				</Row>
				<Row style={{ marginBottom: '20px' }}>
					<Input
						placeholder="Input Date"
						value={data.date}
						onChange={(event) => {
							const newDate = event.target.value;
							setData((prevData) => ({
								title: prevData.title,
								date: newDate,
								hours: prevData.hours,
							}));
						}}
					/>
				</Row>
				<Row style={{ marginBottom: '20px' }}>
					<Input
						placeholder="Input Hours"
						value={data.hours}
						onChange={(event) => {
							const newHours = event.target.value;
							setData((prevData) => ({
								title: prevData.title,
								date: prevData.date,
								hours: newHours,
							}));
						}}
					/>
				</Row>
				<Row>
					<ButtonStyles
						width={'50px'}
						height={'30px'}
						float={'right'}
						cursor={'pointer'}
						onClick={() => {
							editLessons();
						}}
					>
						+
					</ButtonStyles>
				</Row>
			</Col>
		</Row>
	);
}
