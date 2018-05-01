import React from 'react';
import PropTypes from 'prop-types';

import ComposedChartVwV from './ComposedChartVwV';

const kPIProvider =(props)=> {
  if (
    !props.consultationData || 
    !props.referralData || 
    !props.networkingData  || 
    !props.targetData || 
    !props.clientData) {
      return null;
  } 
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
kPIProvider.propTypes = {
  consultationData: PropTypes.array.isRequired,
  referralData: PropTypes.array.isRequired, 
  networkingData: PropTypes.array.isRequired, 
  targetData: PropTypes.array.isRequired, 
  clientData: PropTypes.array.isRequired,
};
export default kPIProvider;
