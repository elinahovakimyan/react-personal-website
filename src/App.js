import React from 'react';

import FreelancerHome from './pages/FreelancerHome';
import Splash from './pages/Splash';

import './App.css';

class App extends React.PureComponent {
  timer = null;
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ isLoading: false })
    }, 0);
  }
  
  componentDidUpdate() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div style={isLoading ? { height: '100vh', overflow: 'hidden' } : null}>
        {isLoading ? <Splash /> : null}
        <FreelancerHome />
      </div>
    );
  }
}

export default App;
