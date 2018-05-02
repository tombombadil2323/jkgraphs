import React from 'react';
import PropTypes from 'prop-types';

import PieChartVwV from './PieChartVwV';

const AsylStatusPie =({clientData}, ...props)=> {
  if (!clientData){
     return null;
  } 

  //wieviele Klienten haben welchen Aufenthaltsstatus
  let legalStatus = [];
  clientData.map(item => legalStatus.push(item.asylumStatus));
  legalStatus = legalStatus.filter((elem, index, self) =>  index === self.indexOf(elem));
  let legalStatusReportData = [];
  for (let i = 0; i< legalStatus.length; i++){
    let statusName = legalStatus[i] !==null ? legalStatus[i] : 'Unknown';
    let reportingObject = {
      name: statusName,
      value: clientData.filter(item => item.asylumStatus === legalStatus[i]).length,
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
AsylStatusPie.propTypes = {
  clientData: PropTypes.array.isRequired,
};
export default AsylStatusPie;
