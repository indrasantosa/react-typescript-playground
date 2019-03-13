import * as React from 'react';

import { AppState } from '../store';
import { connect } from 'react-redux';
import { getGlobalConfig } from '../store/config/actions';

interface HomeScreenProps {
  getGlobalConfig: typeof getGlobalConfig;
}

class HomeScreen extends React.Component<HomeScreenProps> {
  render() {
    return <div>Hello world, Im here!</div>;
  }
  componentDidMount() {
    this.props.getGlobalConfig();
  }
}

const mapStateToProps = (state: AppState) => ({
  globalConfig: state.config
});

export default connect(
  mapStateToProps,
  { getGlobalConfig }
)(HomeScreen);
