// import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import TopWrapper from './components/TopWrapper';
import MiddleWrapper from './components/MiddleWrapper';
import CardWrapper from './components/CardWrapper';
// import NestedDraggableList from './components/NestedDraggableList';
import Sessions from './components/Sessions';

const theme = {
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#003333',
		background_color: 'rgba(34, 49, 52, 0.9)',
		button_color: '#6f32d2',
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header color={theme.colors.body} />
				<TopWrapper />
				<MiddleWrapper />
				<CardWrapper />
				{/* <NestedDraggableList /> */}
				<Sessions />
			</>
		</ThemeProvider>
	);
}

export default App;
