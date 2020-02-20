import React from 'react';
import { RiseLoader } from 'react-spinners';

import './index.scss';

class SplashScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className="splash-screen">
        <h2>Looking for a mobile app developer?</h2>

        <RiseLoader
          sizeUnit={"px"}
          size={20}
          color={'#5aa7dd'}
          loading={this.state.loading}
        />
        <RiseLoader
          sizeUnit={"px"}
          size={20}
          color={'#5aa7dd'}
          loading={this.state.loading}
        />
        <RiseLoader
          sizeUnit={"px"}
          size={20}
          color={'#5aa7dd'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default SplashScreen;