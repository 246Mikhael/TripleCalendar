import React from "react";
import Month from "./Month";





function ThreeMonths({value,increase,decrease}){

  function createArrForMonth(n){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + n;

    let date1 = new Date(year,month+1,0);
    let lastDayOfMonth = date1.getDate();
  

    let date2 = new Date(year,month,1);
    let firstDayOfWeekInMonth = date2.getDay();
    const year1 = date2.getFullYear()
   
    let days =chunk(addEmptyDaysAfter(addEmptyDaysBefore(createArr(lastDayOfMonth),
    firstDayOfWeekInMonth)));

    return {days,year1,month};   
}

function createArr(lastDay){
  let arr = [];
  for(let i = 1; i <= lastDay; i++){
    arr.push(i);
  }
  return arr;  
}


function addEmptyDaysBefore(arr,firstDay){
   if(firstDay === 0){
    firstDay = 7;
   }
   
   for(let i = 1; i < firstDay; i++){
    arr.unshift('');
   }
   return arr;
}

function addEmptyDaysAfter(arr){
  let remainder = arr.length % 7;

  if(remainder > 0){
    let count = 7 - remainder;
    for(let i = 1; i <= count; i++){
      arr.push('');
    }
    return arr;
  } return arr;
}

function chunk(arr){
  let result = [];
  let count = arr.length / 7;

  for(let i = 0; i < count; i++){
    let elems = arr.splice(0,7);
    result.push(elems)
  }
  return result;
}
    return <div>
              <div>
                <Month createArrForMonth={createArrForMonth} num={value - 1}/>
                <Month createArrForMonth={createArrForMonth} num={value}/>
                <Month createArrForMonth={createArrForMonth} num={value + 1}/>
               </div>
               <div >    
                 <a href="/" onClick={(event)=> {
                             decrease();
                              event.preventDefault()}}>назад</a>
                 <a href="/" onClick={(event)=> {
                             increase();
                             event.preventDefault()}}>вперед</a>
              </div>
    </div>
}

export default ThreeMonths;