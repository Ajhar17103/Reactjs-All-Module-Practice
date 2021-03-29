import React, { Component } from 'react'
class Timer extends Component {
    state={
        count: 0,
    }
    intervalId=null;
    incrementCount=()=>{
        this.setState({count:this.state.count+1})
    }
    decrementCount=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
       
    }
    startTimer=()=>{
        if(this.state.count>0 && !this.intervalId){
        this.intervalId=  setInterval(()=>{
                this.setState({count: this.state.count-1},()=>{
                    if(this.state.count==0){
                        alert('Timer Finished')
                        clearInterval(this.intervalId)
                        this.intervalId=null;
                    }
                })
            },1000)
        }
    }
    stopInterval=()=>{
        if(this.intervalId){
            clearInterval(this.intervalId);
            this.intervalId=null;
        }
    }
    resetInterval=()=>{
        this.setState({count:0});
        clearInterval(this.intervalId)
        this.intervalId=null;
    }
    render() {
        
    
        return (
            <div className='container text-center'>
                <h1><u>Timer</u> </h1>
                <button  className='btn btn-danger' onClick={this.decrementCount}>-</button>
                    <span className='container'>{this.state.count}</span>
                <button  className='btn btn-success' onClick={this.incrementCount}>+</button>
                <div>
                    <button className='btn btn-success' onClick={this.startTimer}>Start</button>
                    <button  className='btn btn-success' onClick={this.resetInterval} >Reset</button>
                    <button  className='btn btn-success'   onClick={this.stopInterval} >Stop</button>
                </div>
            </div>
        )
    }
}

export default Timer
