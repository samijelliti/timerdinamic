import React, { Component } from "react";
import './timer.css'

class Timer extends Component {
    render(){
        return(<div className="horlog">
        <div className="numheure1">
            <p className="numh">00</p>
            <p className="lettre">Hour</p>
         </div>
         <div className="numheure2">
            <p className="numh">:00:</p>
            <p className="lettre">Minute</p>
         </div>
         <div className="numheure3">
            <p className="numh">00</p>
            <p className="lettre">Second</p>
         </div>
         </div>
         )


    }
}
export default Timer