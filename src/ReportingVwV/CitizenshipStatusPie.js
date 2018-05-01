import React from 'react';

import PieChartVwV from './PieChartVwV';

const citizenshipStatusPie =(props)=> {
    let {clientData} = props;
  
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
    
    return (
        <PieChartVwV 
            data={citizenshipsReportData} 
            pieDataKey="value" /> 
    );
}

export default citizenshipStatusPie;

  
  