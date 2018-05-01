import React from 'react';

import PieChartVwV from './PieChartVwV';

const asylStatusPie =(props)=> {
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
    <PieChartVwV data={legalStatusReportData} pieDataKey="value" />
    </div>
  );
}

export default asylStatusPie;
