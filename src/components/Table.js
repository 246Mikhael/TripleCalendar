import React from "react";

function Table({createArrForMonth, num}){

let arr = createArrForMonth(num).days;

const rows = arr.map(function(subArr, index){
    return <tr key={index}>
         {subArr.map(function(item,index){
           return <td key={index}>{item}</td>
        })}
            </tr>
})


    return <table>
    <thead>
       <tr>
        <td>пн</td>
        <td>вт</td>
        <td>ср</td>
        <td>чт</td>
        <td>пт</td>
        <td>сб</td>
        <td>вс</td>
        </tr>
    </thead>
    <tbody>
       {rows}
    </tbody>
</table>
}

export default Table;