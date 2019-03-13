import * as React from 'react';

import { AppState } from '../store';
import { connect } from 'react-redux';
import { getGlobalConfig } from '../store/config/actions';

interface LoginScreenProps {
  getGlobalConfig: typeof getGlobalConfig;
}

class LoginScreen extends React.Component<LoginScreenProps> {
  render() {
    return <div>This is login screen!</div>;
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
)(LoginScreen);
