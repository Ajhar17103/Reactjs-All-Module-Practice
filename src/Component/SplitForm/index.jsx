import React, { Component } from 'react'
import PropTypes from 'prop-types';
import InpuForms from '../inputElements/Inputs';

let TextInput=(props)=>{
   
   return <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
        <input
                className='form-control my-2'
                type={props.type} 
                name={props.name} 
                id={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                  />
    </div>    
}

TextInput.propTypes={
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func
}
TextInput.defaultProps={
    type:'text',
    label:'',
    placeholder:''
}
 let Forms=(props)=>{
 return <form className='container' onSubmit={props.handleSumit}>
               <TextInput
               label='Name'
               name='name'
               placeholder='Enter Your Name'
               value={props.name}
               onChange={props.handleChange}
               />

               <TextInput
               label='E-mail'
               name='email'
               placeholder='Enter Your E-mail'
               value={props.email}
               type='email'
               onChange={props.handleChange}
               />

             <TextInput
               label='Password'
               name='password'
               type='password'
               placeholder='Enter Your password'
               value={props.password}
               onChange={props.handleChange}
               />
                  <button 
                  className='form-control btn btn-success'
                  type='submit'
                  >
                 Submit
              
              </button>

              </form>
 }
 Forms.propTypes={
     value:PropTypes.object,
     handleChange:PropTypes.func,
    handleSumit:PropTypes.func,

 }

class SplitForm extends Component {
    state={
        name:'',
        email:'',
        password:''
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
         
    }
    handleSumit=(e)=>{
        e.preventDefault();
        let data={}
        data.name=e.target.name.value;
        data.email=e.target.email.value;
        data.password=e.target.password.value;
        console.log(data);  
        e.target.reset();
        this.setState({
            name:'', email:'', password:''
        })
    } 
  render() {
      let {name, email,password}=this.state
      
      return (
          <div>
              <Forms
              value={this.state}
              handleChange={this.handleChange}
              handleSumit={this.handleSumit}/>
          </div>
      )
  }
}

export default SplitForm;
