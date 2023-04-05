import React from "react";

function Hrefs({increase,decrease,current}){
    return  <div className="hrefs">

        <div className="href">
            <a  href="/" onClick={(event)=> {
                        decrease();
                        event.preventDefault()}}>назад</a>
        </div>         
        <div className="href">
            <a href="/" onClick={(event)=> {
                        current();
                        event.preventDefault()}}>текущий месяц</a>
        </div>      
        <div className="href">      
              <a href="/" onClick={(event)=> {
             increase();
             event.preventDefault()}}>вперед</a>
        </div>   
  </div>  
}

export default Hrefs;