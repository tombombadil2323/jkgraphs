import React, { Component } from 'react';
import {ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, LabelList, Label } from 'recharts';
import RavensburgConsultation from '../DATA/RavensburgConsultation.json';
import RavensburgNetworking from '../DATA/RavensburgNetworking.json';
import RavensburgReferrals from '../DATA/RavensburgReferrals.json';
import RavensburgTargets from '../DATA/RavensburgTargets.json';
import RavensburgClients from '../DATA/RavensburgClients.json';

const reportingVwV =(props)=> {
      let {data: consultationData} = RavensburgConsultation;
      let {data: referralData} = RavensburgReferrals; 
      let {data: networkingData} = RavensburgNetworking; 
      let {data: targetData} = RavensburgTargets; 
      let {data: clientData} = RavensburgClients; 
      let provider =[]; 
      referralData.map(item => provider.push(item.Name));
      consultationData.map(item => provider.push(item.Name));
      networkingData.map(item => provider.push(item.Name));
      targetData.map(item => provider.push(item.Name));
      clientData.map(item => provider.push(item.Name));
      provider = provider.filter((elem, index, self) =>  index == self.indexOf(elem));
      let reportData=[];

      for (let i = 0; i< provider.length; i++){
        let reportingObject = {
            providerName: provider[i],
            consultations: consultationData.filter(item => item.Name === provider[i]).length,
            referrals: referralData.filter(item => item.Name === provider[i]).length,
            networking: networkingData.filter(item => item.Name === provider[i]).length,
            targets: targetData.filter(item => item.Name === provider[i]).length,
            clients: clientData.filter(item => item.Name === provider[i]).length,
            };
            reportData.push(reportingObject);
      }
    return (
      <div>
        <ComposedChart width={1200} height={600} data={reportData}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis dataKey="providerName" scaleToFit={true}/>
          <YAxis/>
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey='consultations' fill='#8884d8' stroke='#8884d8'/>
          <Bar dataKey='referrals' barSize={50} fill='#413ea0'>
            <LabelList dataKey="providerName" position="top" angle= {-90} offset={100}/>
          </Bar>
          <Line type='monotone' dataKey='networking' stroke='#ff7300' />
          <Line type='monotone' dataKey='targets' stroke='#ffe300' />
          <Line type='monotone' dataKey='clients' stroke='#ffa300' />
       </ComposedChart>
      </div>
    );
  }

export default reportingVwV;
