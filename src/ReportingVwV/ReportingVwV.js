import React from 'react';
import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, LabelList,  PieChart,Pie,Cell,} from 'recharts';
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
  provider = provider.filter((elem, index, self) =>  index === self.indexOf(elem));
  
  //kennzahlen pro provider
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
  //wieviele Klienten sind verwaltet vs registriert?
  //let totalClients = clientData.length;
  //let managedClients = clientData.filter(item => item.XXX.length)

  //wieviele Klienten haben welche Staatsbürgerschaft?
  let citizenships = [];
  clientData.map(item => citizenships.push(item.CitizenshipCode));
  citizenships = citizenships.filter((elem, index, self) =>  index === self.indexOf(elem));
  let citizenshipsReportData=[];
  for (let i = 0; i< citizenships.length; i++){
    let citizenship = citizenships[i] === null ?  'Unknown' : citizenships[i];
    let reportingObject = {
        name: citizenship,
        value: clientData.filter(item => item.CitizenshipCode === citizenships[i]).length,
        };
        citizenshipsReportData.push(reportingObject);
  }
  citizenshipsReportData.sort((a, b)=> b.value - a.value);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  //wieviele Klienten haben welchen Aufenthaltsstatus
  let legalStatus = [];
  clientData.map(item => legalStatus.push(item.AsylumStatus));
  legalStatus = legalStatus.filter((elem, index, self) =>  index === self.indexOf(elem));
  let legalStatusReportData = [];
  for (let i = 0; i< legalStatus.length; i++){
    let statusName = legalStatus[i] !==null ? legalStatus[i] : 'Unknown';
    let reportingObject = {
      name: statusName,
      value: clientData.filter(item => item.AsylumStatus === legalStatus[i]).length,
      };
    legalStatusReportData.push(reportingObject);
  }
  //kennzahlen pro Monat  
  let months = ['Januar', 'Februar', 'März', 'April','Mai','Juni','Juli','August','September', 'Oktober','November','Dezember'];
  let monthlyReportData = [];
  for (let i = 0;i<months.length;i++){
    let regExpression = new RegExp('2018-0'+(i+1));
    let reportingObject = {
      Monat: months[i],
      Beratung: consultationData.filter(item => regExpression.test(item.Date)).length,
      Weiterleitung: referralData.filter(item => regExpression.test(item.Date)).length,
      Netzwerk: networkingData.filter(item => regExpression.test(item.Date)).length,
    };
    monthlyReportData.push(reportingObject);
  }
  //meetinglocation der Beratungsgespräche
  //create target date
  //create client / registration date
  return (
    <div>
        <h4>Ravensburg Träger Übersicht</h4>
        <ComposedChart width={1200} height={600} data={reportData}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis dataKey="providerName" hide = {true}/>
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="consultations" stackId="a" fill="#8884d8"/> 
          <Bar dataKey="referrals" stackId="a" fill="#82ca9d"/>
          <Bar dataKey="networking" fill="#ffc658">
            <LabelList dataKey="providerName" position="top" angle= {-90} offset={100}/>
          </Bar>
          <Line type='monotone' dataKey='targets' stroke='#fff300' />
          <Line type='monotone' dataKey='clients' stroke='#ff0300' />
      </ComposedChart>

      <h4>Ravensburg pro Monat</h4>
        <ComposedChart width={1200} height={600} data={monthlyReportData}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis dataKey="Monat" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Beratung" stackId="a" fill="#8884d8"/> 
          <Bar dataKey="Weiterleitung" stackId="a" fill="#82ca9d"/>
          <Bar dataKey="Netzwerk" fill="#ffc658">
          </Bar>
      </ComposedChart>
      <h4>Ravensburg Staatsbürgerschaften</h4>
      <PieChart width={900} height={700} data={citizenshipsReportData}>
        <Pie isAnimationActive={false} 
          data={citizenshipsReportData} 
          cx={500} 
          cy={300} 
          outerRadius={250} 
          fill="#8884d8" 
          label
          dataKey="value"
          >
          {citizenshipsReportData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
          </Pie>
        <Tooltip/>
        <Legend/>
      </PieChart>
      <h4>Ravensburg Asyl-Status</h4>
      <PieChart width={900} height={700} data={legalStatusReportData}>
        <Pie isAnimationActive={false} 
          data={legalStatusReportData} 
          cx={500} 
          cy={300} 
          outerRadius={250} 
          fill="#8884d8" 
          label
          dataKey="value"
          >
          {legalStatusReportData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
          </Pie>
        <Tooltip/>
        <Legend/>
      </PieChart>
    </div>
  );
  }

export default reportingVwV;
