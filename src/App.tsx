import * as React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';

import AppReducer from './store';
import HomeScreen from './containers/Home';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import styled from '@emotion/styled';

const AppWrapper = styled.div`
  text-align: center;
`;

const middlewares = [reduxLogger, reduxThunk];
const store = createStore(
  AppReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <AppWrapper>
            <Route exact path="/" component={HomeScreen} />
          </AppWrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;
