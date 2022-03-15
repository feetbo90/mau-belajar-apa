import React, { useState } from 'react';
import {
	SessionButtonStyled,
	SessionSimpleStyled,
	SessionsStyled,
} from './styles/Sessions.styled';
import ReactDragListView from 'react-drag-listview';
import { Button, List, Typography, Modal } from 'antd';
import { DragOutlined } from '@ant-design/icons';
import { ButtonStyles } from './styles/Button/Button.styled';
import 'antd/dist/antd.min.css';
import './styles/list.css';
import { TextStyled } from './styles/Text/Text.styled';
import handleDragBtn from './images/handleDrag.png';
import videoOutline from './images/video_outline.png';
import group841 from './images/group841.png';
import group842 from './images/group842.png';
import frame896 from './images/frame896.png';
import download from './images/download.png';
import timeCircle from './images/time_circle.png';
import { ImagesStyled } from './styles/Images/ImagesStyled';
import { StyledFirst, StyleLeft } from './styles/StyleLeft/StyleLeft.styled';
import { StyleRight } from './styles/StyleRight/StyleRight.styled';
import DetailBox from './DetailBox/DetailBox';
import AddSessions from './AddSessions/AddSessions';
import EditDetailBox from './DetailBox/EditDetailBox';
import EditDetailBoxSession from './AddSessions/EditDetailBoxSession';

/* MOCK DATA: parent list as Value, subList as subList */
const mockData = [
	{
		id: 'category-one',
		value: 'Session 1',
		subList: [
			{
				id: 'session-one-1',
				judul: 'Judul video 1.',
				required: true,
				tanggal: '24 Oktober 2021, 16:30',
				time: '06:30 Min',
				download: true,
			},
			{
				id: 'session-one-2',
				judul: 'Judul video 2.',
				required: true,
				tanggal: '24 Oktober 2021, 16:30',
				time: '06:30 Min',
				download: true,
			},
			{
				id: 'session-one-3',
				judul: 'Judul video 3.',
				required: true,
				tanggal: '24 Oktober 2021, 16:30',
				time: '06:30 Min',
				download: true,
			},
			{
				id: 'session-one-3',
				judul: 'Judul video 3.',
				required: true,
				tanggal: '24 Oktober 2021, 16:30',
				time: '06:30 Min',
				download: true,
			},
		],
	},
	{
		id: 'category-two',
		value: 'Session 2',
		subList: [
			{
				id: 'session-two-1',
				judul: 'Judul video 4.',
				required: true,
				tanggal: '24 Oktober 2021, 16:30',
				time: '06:30 Min',
				download: true,
			},
			{
				id: 'session-two-2',
				judul: 'Judul video 5.',
				required: true,
				tanggal: '24 Oktober 2021, 16:30',
				time: '06:30 Min',
				download: true,
			},
		],
	},
];

export default function Sessions() {
	const [data, setData] = useState(mockData);
	const [activateModal, setActivateModal] = useState(false);
	const [activateModalSessions, setActivateModalSessions] = useState(false);
	const [activateEditModal, setActivateEditModal] = useState(false);
	const [idSession, setIdSession] = useState('');
	const [detail, setDetail] = useState({});
	const [editLesson, setEditLesson] = useState({ myId: '', index: '' });
	const [mySubList, setMySubList] = useState('');
	const [activateEditModalSession, setActivateEditModalSession] = useState();
	const [editIdSession, setEditIdSession] = useState('');
	/*
    REORDER ACCEPTS:
      list: arr, accepts array of data to be reordered,
      fromIndex: int, onDragStart index,
      toIndex: int, onDragEnd index,
  */
	const clickAddSession = () => {
		console.log('ini tambah session : ');
		setActivateModalSessions(true);
	};

	const clickEditSession = (id) => {
		setEditIdSession(id);
		setActivateEditModalSession(true);
	};

	const addSessions = (session) => {
		setActivateModalSessions(false);
		let mySessions = data;
		mySessions.push({
			id: `category-${new Date()}`,
			value: session,
			subList: [],
		});
	};

	const editMySessions = (mySessionsId, valueSession) => {
		data.map(({ value, subList, id }, index) => {
			if (mySessionsId === index) {
				data[index].value = valueSession;
				setActivateEditModalSession(false);
				setMySubList('');
			}
		});
	};

	const editLessons = (myData) => {
		console.log('edit Lessons');
		console.log(`edit Lesson ${JSON.stringify(editLesson)}`);
		data.map(({ value, subList, id }, index) => {
			if (editLesson.myId === id) {
				subList.map((item, index) => {
					if (index === editLesson.index) {
						item.judul = myData.title;
						item.tanggal = myData.date;
						item.time = myData.hours;
						setActivateEditModal(false);
						setMySubList('');
					}
				});
			}
		});
	};

	const addLesson = (lesson) => {
		setActivateModal(false);
		data.map(({ value, subList, id }, index) => {
			if (id === idSession) {
				data[index].subList.push({
					id: new Date(),
					judul: lesson.title,
					required: true,
					tanggal: lesson.date,
					time: lesson.hours,
					download: true,
				});
			}
		});
	};

	const clickAddLessons = (id) => {
		console.log('ini tambah session id: ' + id);
		setIdSession(id);
		setActivateModal(true);
	};

	const clickEditLesson = (myId, idSub) => {
		data.map(({ value, subList, id }, index) => {
			if (myId === id) {
				subList.map((item, index) => {
					if (index === idSub && myId === id) {
						console.log(`idSession : ${myId} index : ${idSub}`);
						setMySubList(item);
						setEditLesson({ myId: myId, index: idSub });
						setActivateEditModal(true);
					}
				});
				// data[index].subList.push({
				// 	id: new Date(),
				// 	judul: lesson.title,
				// 	required: true,
				// 	tanggal: lesson.date,
				// 	time: lesson.hours,
				// 	download: true,
				// });
			}
		});
	};

	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};

	const onDragEnd = (fromIndex, toIndex, type, index) => {
		/* IGNORES DRAG IF OUTSIDE DESIGNATED AREA */
		if (toIndex < 0) return;
		console.log(
			`from index : ${fromIndex} toIndex :  ${toIndex} tipe ; ${type}`
		);

		/* REORDER PARENT OR SUBLIST, ELSE THROW ERROR */
		if (type === 'LIST-ITEM') {
			const categories = reorder(data, fromIndex, toIndex);
			return setData(categories);
		} else if (type === 'SUBLIST-ITEM') {
			const subList = reorder(data[index].subList, fromIndex, toIndex);
			const categories = JSON.parse(JSON.stringify(data));
			categories[index].subList = subList;
			return setData(categories);
		} else return new Error('NOT A VALID LIST');
	};
	return (
		<SessionsStyled>
			<ReactDragListView
				nodeSelector=".ant-list.draggable"
				lineClassName="dragLine"
				onDragEnd={(fromIndex, toIndex) =>
					onDragEnd(fromIndex, toIndex, 'LIST-ITEM')
				}
			>
				{data.map(({ value, subList, id }, index) => (
					<List
						header={
							<StyledFirst
								key={index}
								height="20px"
								margin-top="0px"
								myHeight="10px"
								paddingTop="0px"
							>
								<StyleLeft
									margin-top="0px"
									myHeight="0px"
									marginLeft="0px"
									paddingTop="0px"
								>
									<Typography.Text strong className="grabbable">
										{/* <DragOutlined className="icon" /> */}
										<ImagesStyled
											src={handleDragBtn}
											width="23px"
											height="24px"
										/>
										{value}
									</Typography.Text>
								</StyleLeft>
								<StyleRight myHeight="20px" marginLeft="10px" marginTop="0px">
									<ul>
										<li>
											<ImagesStyled
												src={group842}
												width="23px"
												height="24px"
												onClick={() => {
													clickEditSession(index);
												}}
											/>
										</li>
									</ul>
								</StyleRight>
							</StyledFirst>
						}
						key={index}
						className="draggable"
					>
						<ReactDragListView
							nodeSelector=".ant-list-item.draggable-item"
							lineClassName="dragLine"
							onDragEnd={(fromIndex, toIndex) =>
								onDragEnd(fromIndex, toIndex, 'SUBLIST-ITEM', index)
							}
						>
							{subList.map((item, index) => (
								<List.Item key={index} className="draggable-item">
									<StyledFirst
										height="50px"
										onClick={() => {
											clickEditLesson(id, index);
											// console.log('myId : ' + id + ' in index : ' + index);
										}}
									>
										<StyleLeft
											margin-top="10px"
											myHeight="10px"
											marginLeft="15px"
											paddingTop="10px"
										>
											<ul>
												<li>
													<ImagesStyled
														src={handleDragBtn}
														width="23px"
														height="24px"
													/>
												</li>
												<li>
													<ImagesStyled
														src={videoOutline}
														width="23px"
														height="24px"
													/>
												</li>
												<li>
													<TextStyled
														margin_one="5px"
														margin_two="10px"
														className="grabbable"
													>
														{item.judul}
													</TextStyled>
												</li>
												<li>
													<TextStyled
														margin_one="5px"
														margin_two="5px"
														color="#7800EF"
													>
														Required
													</TextStyled>
												</li>
												<li>
													<TextStyled
														margin_one="5px"
														margin_two="15px"
														color="#8189A2"
													>
														Previewable
													</TextStyled>
												</li>
											</ul>
										</StyleLeft>
										<StyleRight
											myHeight="20px"
											marginLeft="10px"
											marginTop="10px"
										>
											<ul>
												<li>
													<ImagesStyled
														src={group841}
														width="23px"
														height="24px"
														marginRight="12px"
													/>
												</li>
												<li>
													<TextStyled margin_one="5px" margin_two="5px">
														Downloadable
													</TextStyled>
												</li>
												<li>
													<ImagesStyled
														src={download}
														width="15px"
														height="15px"
													/>
												</li>
												<li>
													<ImagesStyled
														src={frame896}
														width="23px"
														height="24px"
													/>
												</li>
												<li>
													<TextStyled margin_one="5px" margin_two="5px">
														{item.time}
													</TextStyled>
												</li>
												<li>
													<ImagesStyled
														src={timeCircle}
														width="15px"
														height="15px"
													/>
												</li>
												<li>
													<ImagesStyled
														src={frame896}
														width="23px"
														height="24px"
													/>
												</li>
												<li>
													<TextStyled margin_one="5px" margin_two="5px">
														{item.tanggal}
													</TextStyled>
												</li>
												<li>
													<ImagesStyled
														src={timeCircle}
														width="15px"
														height="15px"
													/>
												</li>
											</ul>
										</StyleRight>
									</StyledFirst>
								</List.Item>
							))}
						</ReactDragListView>
						<ButtonStyles
							width={'33px'}
							height={'32px'}
							float={'left'}
							margin_one={'2px'}
							onClick={() => clickAddLessons(id)}
						>
							+
						</ButtonStyles>
						<TextStyled margin_one="10px" margin_two="10px">
							Add Lessons Materials
						</TextStyled>
					</List>
				))}
			</ReactDragListView>
			<SessionButtonStyled onClick={() => clickAddSession()}>
				<ButtonStyles
					width={'161px'}
					height={'48px'}
					float={'right'}
					cursor={'pointer'}
				>
					+ Add Session
				</ButtonStyles>
			</SessionButtonStyled>
			<Modal
				title="Add Session"
				centered
				visible={activateModalSessions}
				onCancel={() => setActivateModalSessions(false)}
				footer={null}
				width={800}
			>
				<AddSessions addSessions={addSessions} />
			</Modal>
			<Modal
				title="Add Lesson"
				centered
				visible={activateModal}
				onCancel={() => setActivateModal(false)}
				footer={null}
				width={800}
			>
				<DetailBox addLesson={addLesson} mySubList={mySubList} />
			</Modal>
			<Modal
				title="Edit Lesson"
				centered
				visible={activateEditModal}
				onCancel={() => setActivateEditModal(false)}
				footer={null}
				width={800}
			>
				<EditDetailBox editLesson={editLessons} mySubList={mySubList} />
			</Modal>
			<Modal
				title="Edit Session"
				centered
				visible={activateEditModalSession}
				onCancel={() => setActivateEditModalSession(false)}
				footer={null}
				width={800}
			>
				<EditDetailBoxSession
					editSession={editMySessions}
					editIdSession={editIdSession}
				/>
			</Modal>
		</SessionsStyled>
	);
}
