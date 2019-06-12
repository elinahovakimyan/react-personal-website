import React from 'react';
import ReactGA from 'react-ga';

import Home from './pages/Home';
import Splash from './pages/Splash';

import './App.css';

class App extends React.PureComponent {
  timer = null;
  state = {
    isLoading: true,
  }

  componentWillMount() {
    this.initializeReactGA();
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);
  }
  
  componentDidUpdate() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  initializeReactGA = () => {
    ReactGA.initialize('UA-109245198-2');
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div style={isLoading ? { height: '100vh', overflow: 'hidden' } : null}>
        {isLoading ? <Splash /> : null}
        <Home/>
      </div>
    );
  }
}

export default App;
