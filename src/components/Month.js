import React from "react";
import Table from "./Table";

function Month({createArrForMonth, num, currentDate}){
  
    let months = ['январь', 'февраль', 'март','апрель', 'май', 'июнь', 'июль', 'август',
'сентябрь','октябрь', 'ноябрь','декабрь'];

 let numberOfMonth = createArrForMonth(num).month;
 
 function normalizeMonthNumber(n){
  let divis = Math.floor(n / 12);
  let divis2 = Math.ceil(-n / 12);

  if(n < 0){
    n = n + 12 * divis2;
  } 
  
  if(n > 11){
    
    n = n - 12 * divis;
  }
  return n;
 }

     let month= months[normalizeMonthNumber(numberOfMonth)];
     
     let year = createArrForMonth(num).year1;

    return <div className="block">
             <div className="info">
                <span>{month}  </span>
                <span>{year}</span>
             </div>
               <Table 
                createArrForMonth={createArrForMonth}
                num={num} 
                year={year}
                month={normalizeMonthNumber(numberOfMonth)}
                currentDate={currentDate}/>
           </div>
}
export default Month;