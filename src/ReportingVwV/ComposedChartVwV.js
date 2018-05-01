import React from 'react';
import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line,} from 'recharts';

const composedChartVwV =(props)=> {
  
  return (
    <div>
        <ComposedChart width={1200} height={600} data={props.data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis dataKey={props.xDataKey} hide = {props.hide}/>
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey={props.bar1DataKey} stackId="a" fill="#8884d8"/> 
          <Bar dataKey={props.bar2DataKey} stackId="a" fill="#82ca9d"/>
          <Bar dataKey={props.bar3DataKey} fill="#ffc658"/>
          <Line type='monotone' dataKey={props.line1DataKey} stroke='#fff300' />
          <Line type='monotone' dataKey={props.line2DataKey} stroke='#ff0300' />
      </ComposedChart>
    </div>
  );
  }

export default composedChartVwV;
