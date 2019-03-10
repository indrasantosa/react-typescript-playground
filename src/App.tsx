import styled from '@emotion/styled';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';

const AppWrapper = styled.div`
	text-align: center;
`;

class App extends React.Component {
	public render() {
		return (
			<Router>
				<AppWrapper>
					<Route exact path="/" component={Home} />
				</AppWrapper>
			</Router>
		);
	}
}

export default App;
