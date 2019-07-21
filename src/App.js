import React from 'react';

import FreelancerHome from './pages/FreelancerHome';
import Splash from './pages/Splash';


class App extends React.PureComponent {
  timer = null;
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000);
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
        {isLoading ? <Splash /> : <FreelancerHome />}
      </div>
    );
  }
}

export default App;
