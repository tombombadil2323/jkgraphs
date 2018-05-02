import React from 'react';
import PropTypes from 'prop-types';

import ComposedChartVwV from './ComposedChartVwV';

const KPIProvider =({consultationData,referralData, networkingData, targetData, clientData}, ...props)=> {
  if (
    !consultationData || 
    !referralData || 
    !networkingData  || 
    !targetData || 
    !clientData) {
      return null;
  } 
  let provider =[]; 
  referralData.map(item => provider.push(item.name));
  consultationData.map(item => provider.push(item.name));
  networkingData.map(item => provider.push(item.name));
  targetData.map(item => provider.push(item.name));
  clientData.map(item => provider.push(item.name));
  provider = provider.filter((elem, index, self) =>  index === self.indexOf(elem));
  
  //kennzahlen pro provider
  let reportData=[];
  for (let i = 0; i< provider.length; i++){
    let reportingObject = {
        providerName: provider[i],
        Beratung: consultationData.filter(item => item.name === provider[i]).length,
        Weiterleitung: referralData.filter(item => item.name === provider[i]).length,
        Netzwerk: networkingData.filter(item => item.name === provider[i]).length,
        Ziele: targetData.filter(item => item.name === provider[i]).length,
        Klienten: clientData.filter(item => item.name === provider[i]).length,
        };
        reportData.push(reportingObject);
  }
  
  return (
    <div>
      <h3>Kennzahlen pro Träger</h3>
      <ComposedChartVwV 
        data={reportData} 
        xDataKey='providerName' 
        hide={true} 
        bar1DataKey='Beratung'
        bar2DataKey='Weiterleitung' 
        bar3DataKey='Netzwerk' 
        line1DataKey='Ziele' 
        line2DataKey='Klienten'/>
        {provider.map((provider, index)=> <span key={index} style={{paddingRight:'8px'}}>{index+1}: {provider}</span>)}
    </div>
  );
}
KPIProvider.propTypes = {
  consultationData: PropTypes.array.isRequired,
  referralData: PropTypes.array.isRequired, 
  networkingData: PropTypes.array.isRequired, 
  targetData: PropTypes.array.isRequired, 
  clientData: PropTypes.array.isRequired,
};
export default KPIProvider;
