import React from "react";
import Table from "./Table";

function Month({ createArrForMonth, 
                 num, 
                 currentDate, 
                 setTooltipValue, 
                 setX, 
                 setY}){
  
    let months = [
      'january', 
      'february', 
      'march',
      'april', 
      'may', 
      'june', 
      'july', 
      'august',
      'september',
      'october', 
      'november',
      'december'
    ];

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

    let month = months[normalizeMonthNumber(numberOfMonth)];
    let year = createArrForMonth(num).year1;

    return <div>
             <div className="text-right">
                <span className="text-capitalize fs-3 fw-bold">
                  {month}
                </span>
                <span className="fw-normal fs-3">
                  {year}
                </span>
             </div>
             <div className="border-bottom border-dark  mt-1"></div>
               <Table 
                  createArrForMonth = {createArrForMonth}
                  num = {num} 
                  year = {year}
                  month = {normalizeMonthNumber( numberOfMonth )}
                  currentDate = {currentDate}
                  setTooltipValue = {setTooltipValue}
                  setX = {setX}
                  setY = {setY}/>
             </div>
}

export default Month;