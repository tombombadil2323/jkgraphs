import React, { Component } from 'react';
import {ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';


class VwVReporting extends Component {
  render() {
    return (
      <div>
        <LineChart width={400} height={400} data={this.props.data}>
                    <Line type="monotone" dataKey="Beratungsgespräche" stroke="#8884d8" />
                </LineChart>
                <ComposedChart width={600} height={400} data={this.props.data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey='Vernetzung' fill='#8884d8' stroke='#8884d8'/>
          <Bar dataKey='Weiterleitungen' barSize={20} fill='#413ea0' />
          <Line type='monotone' dataKey='Beratungsgespräche' stroke='#ff7300' />
       </ComposedChart>
      </div>
    );
  }
}

export default VwVReporting;
