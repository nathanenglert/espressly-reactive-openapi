import React, { Component } from 'react';
import Things from './things/Things';

import './App.css';

class App extends Component {
  // callAPI() {
  //   fetch('http://localhost:9000/things')
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ apiResponse: res }))
  //     .catch((err) => err);
  // }

  render() {
    return (
      <div className="App">
        <Things />
      </div>
    );
  }
}

export default App;
