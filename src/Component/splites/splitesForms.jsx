import React, { Component } from 'react'
import PropTypes from 'prop-types'

let InputElements=(props)=>{
    return(
        <div className='form-group'>
            <label>{props.label}</label>
            <input 
            className='container'
              name={props.name}
              type={props.type}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.onChange}
              />
        </div>
    )
}
InputElements.propTypes={
    name:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string,
    type:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func

}
InputElements.defaultProps={
    type:'text',
    label:'Name',
    placeholder:'Enter your Name'
}

let Forms=(props)=>{
    return(
        <div className='container'>

            <form onSubmit={props.submitHandler}>

            <InputElements
             label='Name:'
             name='name'
             type='text'
             value={props.value}
             placeholder='Enter Your Name'
             onChange={props.onChangeHandeler}
            />
            <InputElements
             label='E-mail:'
             name='email'
             type='email'
             value={props.value}
             placeholder='Enter Your email'
             onChange={props.onChangeHandeler}
            />
            <InputElements
             label='Password:'
             name='password'
             type='password'
             value={props.value}
             placeholder='Enter Your password'
             onChange={props.onChangeHandeler}
            />

            <button className='container btn btn-danger' type='submit '> Submit</button>

            </form>
        
        </div>
    )
}

Forms.propTypes={
    value:PropTypes.object,
    submitHandler:PropTypes.func,
    onChangeHandeler:PropTypes.func

}

export class SplitesForms extends Component {
    state={
        name:'',
        email:'',
        password:''
    }
    submitHandler=(e)=>{
        e.preventDefault();
        let data={}
        data.name=e.target.name.value;
        data.password=e.target.password.value;
        data.email=e.target.email.value;
        console.log(data);
        e.target.reset();
        this.setState({
            name:'', email:'', password:''
        })
    }
    onChangeHandeler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })


    }
    render() {
        return (
            <div>
                <Forms
                submitHandler={this.submitHandler}
                onChangeHandeler={this.onChangeHandeler}
                />
            </div>
        )
    }
}

export default SplitesForms;
