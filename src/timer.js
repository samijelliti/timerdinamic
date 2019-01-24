import React, { Component } from "react";
import './timer.css'




class Timer extends Component {
   
     
    render(){ 
       const {time}=this.props
       let heure=Math.trunc(time/3600000)
       let resteheure=time-(heure*3600000)
       let minute=Math.trunc(resteheure/60000)
       let resteminute=resteheure-(minute*60000)
       let seconde=Math.trunc(resteminute/1000)
        return(<div className="horlog">
        <div className="numheure1">
            <p className="numh">{heure}</p>
            <p className="lettre">Hour</p>
         </div>
         <div className="numheure2">
            <p className="numh">:{minute}:</p>
            <p className="lettre">Minute</p>
         </div>
         <div className="numheure3">
            <p className="numh">{seconde}</p>
            <p className="lettre">Second</p>
         </div>
         </div>
         )


    }
}
export default Timer