import React from 'react';
import Auth from '../model/Auth';
import AppNavigator from '../navigation/AppNavigator';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    Auth.instance = new Auth(() => {
      this.setState({loaded: true});
    });
  }

  render() {
    const {loaded} = this.state;
    return loaded ? <AppNavigator /> : null;
  }
}

export default SplashScreen;
