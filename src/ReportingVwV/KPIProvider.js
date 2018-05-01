import React from 'react';

import ComposedChartVwV from './ComposedChartVwV';

const kPIProvider =(props)=> {
  let {consultationData,referralData, networkingData, targetData, clientData} = props;
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
  
  return (
    <div>
    <ComposedChartVwV data={reportData} xDataKey="providerName" hide={true} bar1DataKey="consultations" bar2DataKey="referrals" bar3DataKey="networking" labelDataKey="providerName" line1DataKey='targets' line2DataKey='clients'/>
    </div>
  );
}

export default kPIProvider;
