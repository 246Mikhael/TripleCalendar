import React, { useState } from "react";
import Month from "./Month";
import Hrefs from "./Hrefs";
import Tooltip from "./Tooltip";

function ThreeMonths({value,
                      increase,
                      decrease,
                      current}){

  let [tooltipValue, setTooltipValue] = useState('');
  let [ x, setX] = useState(0);
  let [ y, setY] = useState(0);

  let tooltip = undefined;

  function setCoords() {
    const style = {
      top: `${y + 20}px`,
      left: `${x - 110}px`
    }
    return style;
  }
  

  if (tooltipValue) {
    tooltip = <Tooltip value={tooltipValue} 
                       style={setCoords()}/>
  } else {
    tooltip = undefined;
  }
  

  function getCurrentDate() {
    let date = new Date();
    return date.getFullYear() + " " + date.getMonth() + " " + date.getDate();
  }

  function createArrForMonth(n) {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + n;

    let date1 = new Date(year, month+1, 0);
    let lastDayOfMonth = date1.getDate();
    let today = year + ' ' + month + " " + date.getDate();

    let date2 = new Date(year, month, 1);
    let firstDayOfWeekInMonth = date2.getDay();
    const year1 = date2.getFullYear()
   
    let days = chunk( addEmptyDaysAfter( addEmptyDaysBefore( createArr( lastDayOfMonth ),
    firstDayOfWeekInMonth )));

    return {days, year1, month, today};   
  }

  function createArr(lastDay) {
    let arr = [];
    for (let i = 1; i <= lastDay; i++) {
      arr.push(i);
    }
      return arr;  
  }


  function addEmptyDaysBefore(arr,firstDay) {
    if (firstDay === 0) {
      firstDay = 7;
    }
   
    for (let i = 1; i < firstDay; i++) {
      arr.unshift('');
    }
     return arr;
  }

  function addEmptyDaysAfter(arr) {
    let remainder = arr.length % 7;

    if (remainder > 0) {
      let count = 7 - remainder;
      for (let i = 1; i <= count; i++) {
        arr.push('');
      }
      return arr;
    } return arr;
  }

  function chunk(arr) {
    let result = [];
    let count = arr.length / 7;

    for (let i = 0; i < count; i++){
      let elems = arr.splice(0,7);
      result.push(elems)
    }
    return result;

  }


    return <div> 
                 
                <header className="container z-0">
                  <div className="row">
                      <h1 className="col-md-4 col-sm-12 text-center text-uppercase text-light ">Сalendar</h1>
                  </div>
                </header>
                <Hrefs increase = {increase}
                       decrease = {decrease}
                       current = {current}/> 
                
                <div className = "container">
                  <div className = "row">
                     <div className = "col-12 mb-4 border-4 border-bottom"></div>          
                  </div>
                </div>

                  {tooltip}

                <div className = "container">  
                  <div className = "row gx-5">
                  <div className = "col-xl-4 col-md-4 col-sm-12" >
                      <Month 
                        createArrForMonth = {createArrForMonth}
                        num = {value - 1}
                        setTooltipValue = {setTooltipValue}
                        currentDate = {getCurrentDate()}
                        setX = {setX}
                        setY = {setY}/>
                    </div>
                    <div className = "col-xl-4 col-md-4 col-sm-12">
                      <Month
                        createArrForMonth = {createArrForMonth}
                        num = {value}
                        setTooltipValue = {setTooltipValue}
                        currentDate = {getCurrentDate()}
                        setX = {setX}
                        setY = {setY}/>
                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-12">
                      <Month
                        createArrForMonth = {createArrForMonth}
                        num = {value + 1}
                        setTooltipValue = {setTooltipValue}
                        currentDate = {getCurrentDate()}
                        setX = {setX}
                        setY = {setY}/>
                    </div>
                  </div> 
                </div>

                <div className = "container">
                  <div className = "row">
                      <div className = "col-12 mb-4 border-4 border-bottom"></div>
                  </div>
                </div>

                <footer className="container mt-4">
                  <div className = "row">
                    <div className = "footer-css">Saratov 2023</div>
                  </div>
                </footer>

            </div>
}

export default ThreeMonths;