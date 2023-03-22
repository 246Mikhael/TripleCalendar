import React from "react";
import Table from "./Table";

const styles = {
     display: 'inline-block',
     paddingRight: '40px'
    }

function Month({createArrForMonth, num}){

    let months = ['январь', 'февраль', 'март','апрель', 'май', 'июнь', 'июль', 'август',
'сентябрь','октябрь', 'ноябрь','декабрь'];

 let numberOfMonth = createArrForMonth(num).month;
 
 console.log(numberOfMonth);
 console.log(normalizeMonthNumber(numberOfMonth));
 
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


    return <div  style={styles}>
             <div>
                <p  style={styles}>{month}</p>
                <p  style={styles}>{year}</p>
             </div>
             <div style={styles}>
               <Table createArrForMonth={createArrForMonth} num={num}/>
             </div>
           </div>
}


export default Month;