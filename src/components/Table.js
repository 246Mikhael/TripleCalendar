import React from "react";

function Table({createArrForMonth, 
                num, 
                year, 
                month, 
                currentDate, 
                setTooltipValue, 
                setX, 
                setY}){

    let hollidays = {
        '0_1':  "New Year",
        '1_23': "Defender of The Fatherland Day",
        '2_8': "International Women's Day",
        '4_1': "International Worker's Day",
        '4_9': "Victory Day",
        '5_12': "Russia Day",
        '10_4': "National Unity Day",
        '11_31': "New Year"
    }
  
 
    function getHollidays (mon , day) {
        if (mon + '_' + day === '0_1' || 
            mon + '_' + day === '1_23' ||
            mon + '_' + day === '2_8' ||
            mon + '_' + day === '4_1' ||
            mon + '_' + day === '4_9' || 
            mon + '_' + day === '5_12' ||
            mon + '_' + day === '10_4' ||
            mon + '_' + day === '11_31') {
         return true;
        }
    }

    
    function getTooltipText( event, obj ) {
        setTooltipValue( obj[event.target.id] );
        setX( event.clientX );
        setY( event.clientY );
    }

      
    function delTooltipText() {
        setTooltipValue('')
    }


    let arr = createArrForMonth(num).days;

    const rows = arr.map( function(subArr, index) {
   
      return <tr key={index}>
         {subArr.map( function(item,index) {

            let isHolliday = getHollidays(month, item);

            let date = year +' ' + month +' ' + item;
            let monthAndDay = month +'_' + item;
            
            if (date === currentDate && !isHolliday) {
                return <td 
                           key = {index}
                           className='today'>
                           {item}
                       </td>
            } else if (date === currentDate && isHolliday) {
                return <td 
                           onMouseOver = {(event) => { getTooltipText(event, hollidays)}}
                           onMouseLeave = {(event) => delTooltipText(event)}
                           id = {monthAndDay}
                           key = {index} 
                           className = 'today today-holiday'>
                          {item}
                       </td>
            } else {
                if ((index === 5 || index === 6) && !isHolliday) {
                    return <td 
                               className = 'weekend'
                               key = {index}>
                               {item}
                           </td>
                }else if ((index === 5 || index === 6) && isHolliday) {
                    return <td 
                               onMouseOver = {(event) => {getTooltipText(event, hollidays)}}
                               onMouseLeave = {(event) => delTooltipText(event)}
                               id = {monthAndDay}
                               key = {index}
                               className = 'holiday weekend'>          
                               {item}
                            </td>
                } else if ((index !== 5 || index !== 6) && isHolliday) {
                    return <td
                             onMouseOver = {(event) =>  {getTooltipText(event, hollidays)}}
                             onMouseLeave = {(event) => delTooltipText(event)}
                             id = {monthAndDay}
                             key = {index}
                             className = "holiday">       
                             {item}
                             </td>
                } else {
                    return <td
                               key = {index}>
                               {item}
                            </td>
                }
            }
           
        })}
            </tr>
})


    return <div>
        <table className="w-100 mb-4">
          <thead className="fs-5 text-uppercase text-center">
             <tr>
                <td>mon</td>
                <td>tue</td>
                <td>wed</td>
                <td>thu</td>
                <td>fri</td>
                <td className = "weekend">sat</td>
                <td className = "weekend">sun</td>
             </tr>
          </thead>
          <tbody className = "fs-4 text-center">
             {rows}
          </tbody>
        </table>
    </div> 
}

export default Table;