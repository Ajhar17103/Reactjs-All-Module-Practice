import React, { Component } from 'react'

let onclicked=(e)=>{
    console.log(e);

}
function Event() {
    
    
    return (
        <div>
            <button onClick={onclicked}>click me</button>

            <input 
            className={InputEvent} 
            placeholder='Enter some text'
            type='text'
            onChange={(e)=>{
                console.log(e.target.value);
            }}

            
            />
            <EventClass/>
        </div>
    )
}

export default Event



export class EventClass extends Component {
    state={
        name:''
    }
    changeHandler=(e)=>{
        this.setState({name:e.target.value})
    }
    render() {
        console.log(this.state.name);
        return (
            <div>
                <input type='text'
                className='input'
                placeholder='input somthings'
                onChange={this.changeHandler}
                value={this.state.name}
                 onFocus={()=>{
                    console.log('Focused');
                }}
                onBlur={()=>{
                    if(!this.state.name)
                    alert('blured')
                    console.log('blured');
                }}
                />
                <br/>
                <br/>
                 { this.state.name !=0 && <h1>WellCome, {this.state.name} </h1>}
            </div>
        )
    }
}

 
