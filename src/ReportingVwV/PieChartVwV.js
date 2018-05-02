import React from 'react';
import {Tooltip, Legend, PieChart,Pie,Cell,} from 'recharts';

const PieChartVwV =(props)=> {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#AABB00'];
    return (
        <div>
            <PieChart width={900} height={700} data={props.data}>
                <Pie isAnimationActive={false} 
                data={props.data} 
                cx={500} 
                cy={300} 
                outerRadius={250} 
                fill="#8884d8" 
                label
                dataKey={props.pieDataKey}
                >
                {props.data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
                </Pie>
                <Tooltip/>
                <Legend/>
        </PieChart>
        </div>
    );
  }

export default PieChartVwV;