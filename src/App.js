import React, { Component } from 'react';
import './App.css';
import ReportingVwV from './ReportingVwV/ReportingVwV';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
}
  
  render() {
    return (
      <div>
        <ReportingVwV />
      </div>
    );
  }
}

export default App;
