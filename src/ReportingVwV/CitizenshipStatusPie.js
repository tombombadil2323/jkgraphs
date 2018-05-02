import React from 'react';
import PropTypes from 'prop-types';

import PieChartVwV from './PieChartVwV';

const CitizenshipStatusPie =({clientData}, ...props)=> {
    if (!clientData){
        return null;
     } 
  
    //wieviele Klienten haben welche Staatsbürgerschaft?
    let citizenships = [];
    clientData.map(item => citizenships.push(item.citizenshipCode));
    citizenships = citizenships.filter((elem, index, self) =>  index === self.indexOf(elem));
    let citizenshipsReportData=[];
    for (let i = 0; i< citizenships.length; i++){
    let citizenship = citizenships[i] === null ?  'Unknown' : citizenships[i];
    let reportingObject = {
        name: citizenship,
        value: clientData.filter(item => item.citizenshipCode === citizenships[i]).length,
        };
        citizenshipsReportData.push(reportingObject);
    }
    citizenshipsReportData.sort((a, b)=> b.value - a.value);
    
    return (
        <div>
            <h3>Klienten nach Staatsangehörigkeit</h3>
            <PieChartVwV 
                data={citizenshipsReportData} 
                pieDataKey="value" /> 
        </div>
    );
}
CitizenshipStatusPie.propTypes = {
    clientData: PropTypes.array.isRequired,
  };
export default CitizenshipStatusPie;

  
  