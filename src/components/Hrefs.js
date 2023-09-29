import React from "react";

function Hrefs({ increase,
                 decrease,
                 current }) {
    return  <div className="container nav-css fs-1 text-left mt-4 mb-4 ">
               <div className="row gx-5">
                  <div className="col">
                     <a className="text-decoration-none text-dark"
                        href="/" onClick={(event)=> {
                        decrease();
                        event.preventDefault()}}>back</a>
                  </div>         
                  <div className="col">
                    <a  className="text-decoration-none text-dark"
                        href="/" onClick={(event)=> {
                        current();
                        event.preventDefault()}}>current</a>
                  </div>      
                  <div className="col">      
                    <a  className="text-decoration-none text-dark"
                        href="/" onClick={(event)=> {
                        increase();
                        event.preventDefault()}}>forward</a>
                 </div> 
               </div>  
            </div>  
}

export default Hrefs;