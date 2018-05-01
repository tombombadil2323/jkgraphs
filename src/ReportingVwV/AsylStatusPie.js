import React from 'react';
import PropTypes from 'prop-types';

import PieChartVwV from './PieChartVwV';

const asylStatusPie =(props)=> {
  if (!props.clientData){
     return null;
  } 
  let {clientData} = props;

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
  
  return (
    <div>
      <h3>Klienten nach Aufenthaltstatus</h3>
      <PieChartVwV 
        data={legalStatusReportData} 
        pieDataKey="value" />
    </div>
  );
}
asylStatusPie.propTypes = {
  clientData: PropTypes.array.isRequired,
};
export default asylStatusPie;
