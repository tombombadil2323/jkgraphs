import React, { Component } from 'react';

import RavensburgConsultation from './DATA/RavensburgConsultation.json';
import RavensburgNetworking from './DATA/RavensburgNetworking.json';
import RavensburgReferrals from './DATA/RavensburgReferrals.json';
import RavensburgTargets from './DATA/RavensburgTargets.json';
import RavensburgClients from './DATA/RavensburgClients.json';

import KPIProvider from './ReportingVwV/KPIProvider';
import KPIMonthly from './ReportingVwV/KPIMonthly';
import AsylStatusPie from './ReportingVwV/AsylStatusPie';
import CitizenshipStatusPie from './ReportingVwV/CitizenshipStatusPie';

const app = (props) => {
  const {data: consultationData} = RavensburgConsultation;
  const {data: referralData} = RavensburgReferrals; 
  const {data: networkingData} = RavensburgNetworking; 
  const {data: targetData} = RavensburgTargets; 
  const {data: clientData} = RavensburgClients; 
  return (
    <div>
      <KPIProvider consultationData={consultationData} referralData={referralData} networkingData={networkingData} targetData={targetData} clientData={clientData} />
      <KPIMonthly consultationData={consultationData} referralData={referralData} networkingData={networkingData} />
      <AsylStatusPie clientData={clientData}/>
      <CitizenshipStatusPie clientData={clientData} />
    </div>
  );
}

export default app;

//wieviele Klienten sind verwaltet vs registriert?
//let totalClients = clientData.length;
//let managedClients = clientData.filter(item => item.XXX.length)
//meetinglocation der Beratungsgespräche
//create target date
//create client / registration date