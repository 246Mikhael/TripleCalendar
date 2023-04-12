import React from "react";
import Month from "./Month";
import Hrefs from "./Hrefs";

function ThreeMonths({value,increase,decrease,current}){

  function getCurrentDate(){
    let date = new Date();
    return date.getFullYear() + " " + date.getMonth() + " " + date.getDate();
  }

  function createArrForMonth(n){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + n;

    let date1 = new Date(year,month+1,0);
    let lastDayOfMonth = date1.getDate();
    let today = year + ' ' + month + " " + date.getDate();

    let date2 = new Date(year,month,1);
    let firstDayOfWeekInMonth = date2.getDay();
    const year1 = date2.getFullYear()
   
    let days =chunk(addEmptyDaysAfter(addEmptyDaysBefore(createArr(lastDayOfMonth),
    firstDayOfWeekInMonth)));

    return {days,year1,month,today};   
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
              <Hrefs increase ={increase}
                          decrease ={decrease}
                          current={current}/>
               <div id="months">  
                <Month
                  createArrForMonth={createArrForMonth}
                  num={value - 1}
                  currentDate = {getCurrentDate()}/>
                <Month
                  createArrForMonth={createArrForMonth} 
                  num={value}
                  currentDate = {getCurrentDate()} />
                <Month 
                  createArrForMonth={createArrForMonth} 
                  num={value + 1}
                  currentDate = {getCurrentDate()}/>
               </div>
    </div>
}

export default ThreeMonths;