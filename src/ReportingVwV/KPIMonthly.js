import React from 'react';

import BarChartVwV from './BarChartVwV';

const kPIMonthly =(props)=> {
  let {consultationData, referralData, networkingData} = props;
  
  //kennzahlen pro Monat  
  let months = ['Januar', 'Februar', 'März', 'April','Mai','Juni','Juli','August','September', 'Oktober','November','Dezember'];
  let monthlyReportData = [];
  for (let i = 0;i<months.length;i++){
    //muss noch für weitere Jahre angepasst werden
    let regExpressionJanSep = new RegExp('2018-0'+(i+1));
    let regExpressionOctDec = new RegExp('2018-1'+(i-9));
    let reportingObject = {
      Monat: months[i],
      Beratung: consultationData.filter(item => regExpressionJanSep.test(item.Date)||regExpressionOctDec.test(item.Date)).length ,
      Weiterleitung: referralData.filter(item => regExpressionJanSep.test(item.Date)||regExpressionOctDec.test(item.Date)).length,
      Netzwerk: networkingData.filter(item => regExpressionJanSep.test(item.Date)||regExpressionOctDec.test(item.Date)).length,
    };
    monthlyReportData.push(reportingObject);
  }
    
  return (
    <div>
      <h3>Kennzahlen pro Monat</h3>
      <BarChartVwV 
        data={monthlyReportData} 
        xDataKey="Monat" 
        hide={false} 
        bar1DataKey="Beratung" 
        bar2DataKey="Weiterleitung" 
        bar3DataKey="Netzwerk"/>
    </div>
      
  );
}

export default kPIMonthly;