import React from 'react';

//SELECT_FROM_ConsultationMeetings_rm_JOIN_Integrators_i_on_rm_Int_201804301055
import RavensburgConsultation from './DATA/RavensburgConsultation.json';
//SELECT_FROM_NetworkingMeetings_rm_JOIN_Integrators_i_on_rm_Integ_201804301056
import RavensburgNetworking from './DATA/RavensburgNetworking.json';
//SELECT_FROM_ReferralMeetings_rm_JOIN_Integrators_i_on_rm_Integra_201804301056
import RavensburgReferrals from './DATA/RavensburgReferrals.json';
//SELECT_FROM_ravensburg_jk_dbo_targets_t_join_Clients_c_ON_c_User_201804301114
import RavensburgTargets from './DATA/RavensburgTargets.json';
//SELECT_FROM_ravensburg_jk_dbo_Clients_c_JOIN_Integrators_i_on_c__201804301112
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
      <KPIProvider 
        consultationData={consultationData} 
        referralData={referralData} 
        networkingData={networkingData} 
        targetData={targetData} 
        clientData={clientData} />
      <KPIMonthly 
        consultationData={consultationData} 
        referralData={referralData} 
        networkingData={networkingData} />
      <AsylStatusPie  
        clientData={clientData}/>
      <CitizenshipStatusPie 
        clientData={clientData} />
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