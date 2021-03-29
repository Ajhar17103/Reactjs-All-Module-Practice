import React, { Component } from 'react'

export class State extends Component {
    state={
        count:1
    }
    render() {
        console.log('count'+ this.state.count);
        return (
            <div>
                <h1>count: {this.state.count}</h1>

                <button className='btn btn-success' onClick={()=>{
                    this.setState({count: this.state.count +1 })
                }}>Add +1</button>
            </div>
        )
    }
}

export default State
