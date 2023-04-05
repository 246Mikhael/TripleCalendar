import React from "react";

function Table({createArrForMonth, num, year, month, currentDate}){

 const style = {
    background: 'rgb(219, 253, 241)'
 }   

let arr = createArrForMonth(num).days;
const rows = arr.map(function(subArr, index){
   
    return <tr key={index}>
         {subArr.map(function(item,index){

            let id = year +' ' + month +' ' + item;
            if(id === currentDate){
                return <td 
                key={index} 
                style={style}>
                {item}
                </td>
            } else {
                return <td
                className={'day'+index} 
                key={index}>
                {item}
                </td>
            }
           
        })}
            </tr>
})


    return <table>
    <thead>
       <tr>
        <td className="day">пн</td>
        <td className="day">вт</td>
        <td className="day">ср</td>
        <td className="day">чт</td>
        <td className="day">пт</td>
        <td className="day">сб</td>
        <td className="day">вс</td>
        </tr>
    </thead>
    <tbody>
       {rows}
    </tbody>
</table>
}

export default Table;