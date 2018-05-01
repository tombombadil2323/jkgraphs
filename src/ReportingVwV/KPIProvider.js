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
        Beratung: consultationData.filter(item => item.Name === provider[i]).length,
        Weiterleitung: referralData.filter(item => item.Name === provider[i]).length,
        Netzwerk: networkingData.filter(item => item.Name === provider[i]).length,
        Ziele: targetData.filter(item => item.Name === provider[i]).length,
        Klienten: clientData.filter(item => item.Name === provider[i]).length,
        };
        reportData.push(reportingObject);
  }
  
  return (
    <div>
      <h3>Kennzahlen pro Träger</h3>
      <ComposedChartVwV 
        data={reportData} 
        xDataKey="providerName" 
        hide={true} 
        bar1DataKey="Beratung" 
        bar2DataKey="Weiterleitung" 
        bar3DataKey="Netzwerk" 
        labelDataKey="providerName" 
        line1DataKey='Ziele' 
        line2DataKey='Klienten'/>
    </div>
  );
}

export default kPIProvider;
