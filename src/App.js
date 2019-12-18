import React from 'react';
import {View} from 'react-native';

import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import pages from './pages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: pages.home,
    };
  }

  onRequestPage = (src, dest) => {
    console.log(`${src} requested ${dest}`);
    this.setState({currentPage: dest});
  };

  render() {
    const {currentPage} = this.state;
    switch (currentPage) {
      case pages.home:
        return (
          <Home pageName={pages.home} onRequestPage={this.onRequestPage} />
        );
      case pages.login:
        return (
          <Login pageName={pages.login} onRequestPage={this.onRequestPage} />
        );
      case pages.profile:
        return (
          <Profile
            pageName={pages.profile}
            onRequestPage={this.onRequestPage}
          />
        );
      default:
        return <View />;
    }
  }
}

export default App;
