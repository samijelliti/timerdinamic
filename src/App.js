import React, { Component } from 'react';
import './App.css';
import Timer from "./timer.js";


// const count ="23445566"
class App extends Component {
constructor(props)
{
  super(props)
  this.state={
    count :0
  }
  // setInterval(() => { this.setState({ count: this.state.count+1000 });
  //     }, 1000);
 
}



 start=() => this.intervalid = setInterval(() => {this.setState({ count: this.state.count+1000 })}, 1000)
 stop = () => clearInterval(this.intervalid);
 reset = () => 
    {
      this.setState({count : 0})
      this.stop()
    }





  render() { 
    return (
      <div className="App">
        
        <Timer  time={this.state.count} className="timeapp"/>
        <button onClick= {this.start}>START</button>
        <button onClick= {this.stop}>STOP</button>
        <button onClick= {this.reset}>RESET</button>
      </div>
      
    );
    
  }
}

export default App;
