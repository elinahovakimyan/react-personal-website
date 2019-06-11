import React from 'react';
import { RingLoader } from 'react-spinners';

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
        <h2>
          Looking for a developer?
          <br/>
          Taking you to the right place...
        </h2>

        <RingLoader
          sizeUnit={"px"}
          size={180}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default SplashScreen;