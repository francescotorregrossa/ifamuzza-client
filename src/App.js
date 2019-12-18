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
    return (
      <>
        <Home
          pageName={pages.home}
          currentPage={currentPage}
          onRequestPage={this.onRequestPage}
        />
        <Login
          pageName={pages.login}
          currentPage={currentPage}
          onRequestPage={this.onRequestPage}
        />
        <Profile
          pageName={pages.profile}
          currentPage={currentPage}
          onRequestPage={this.onRequestPage}
        />
      </>
    );
  }
}

export default App;
