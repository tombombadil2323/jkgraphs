import React, { Component } from 'react';
import './App.css';
import VwVReporting from './VwVReporting/VwVReporting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [
          {name: 'Träger A', Beratungsgespräche: 4000, Weiterleitungen: 2400, Vernetzung: 2400},
          {name: 'Träger B', Beratungsgespräche: 3000, Weiterleitungen: 1398, Vernetzung: 2210},
          {name: 'Gemeinde C', Beratungsgespräche: 2000, Weiterleitungen: 9800, Vernetzung: 2290},
          {name: 'Stadt D', Beratungsgespräche: 2780, Weiterleitungen: 3908, Vernetzung: 2000},
          {name: 'Stadt E', Beratungsgespräche: 1890, Weiterleitungen: 4800, Vernetzung: 2181},
        ],
    }
}
  
  render() {
    return (
      <div>
        <VwVReporting data={this.state.data}/>
      </div>
    );
  }
}

export default App;
