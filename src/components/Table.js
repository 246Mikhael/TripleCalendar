import React from "react";

function Table({createArrForMonth, 
                num, 
                year, 
                month, 
                currentDate, 
                setTooltipValue, 
                setX, 
                setY}){

    
 
    function getHollidays (mon , day) {
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
      
         let date = mon + '_' + day;

        if (date === '0_1' || 
            date === '1_23' ||
            date === '2_8' ||
            date === '4_1' ||
            date === '4_9' || 
            date === '5_12' ||
            date === '10_4' ||
            date === '11_31') {
         return hollidays[date];
        }
    }

    
    function getTooltipText( event, date ) {
        setTooltipValue(date);
        setX( event.pageX );
        setY( event.pageY );
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
                           onMouseMove = {(event) => { getTooltipText(event, isHolliday)}}
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
                               onMouseMove = {(event) => {getTooltipText(event, isHolliday)}}
                               onMouseLeave = {(event) => delTooltipText(event)}
                               id = {monthAndDay}
                               key = {index}
                               className = 'holiday weekend'>          
                               {item}
                            </td>
                } else if ((index !== 5 || index !== 6) && isHolliday) {
                    return <td
                             onMouseMove = {(event) =>  {getTooltipText(event, isHolliday)}}
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
          <thead className="fs-6 text-uppercase text-center">
             <tr>
                <td className="month">mon</td>
                <td className="month">tue</td>
                <td className="month">wed</td>
                <td className="month">thu</td>
                <td className="month">fri</td>
                <td className = "weekend month">sat</td>
                <td className = "weekend month">sun</td>
             </tr>
          </thead>
          <tbody className = "fs-4 text-center">
             {rows}
          </tbody>
        </table>
    </div> 
}

export default Table;