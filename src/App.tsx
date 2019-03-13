import * as React from 'react';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';

import AppReducer from './store';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadable from '@loadable/component';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import styled from '@emotion/styled';

const HomeScreen = loadable(() => import('./containers/Home'));
const LoginScreen = loadable(() => import('./containers/Login'));

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
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/login" component={LoginScreen} />
          </AppWrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;
