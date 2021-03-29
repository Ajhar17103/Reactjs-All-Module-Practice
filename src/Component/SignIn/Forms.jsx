import React from 'react'
import Inputtext from './Inputext'
import PropTypes from 'prop-types'

let GenderSelect=(props)=>{
    return(
        <div>
            
            <input  className='mx-2'
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            />
            <label  >{props.label}</label>
        </div>
    )
}
GenderSelect.propTypes={
    name:PropTypes.string,
    label:PropTypes.string,
    value:PropTypes.string,
    type:PropTypes.string,
    onChange:PropTypes.func
}
function Forms(props) {
    return (
        <div className='container'>
            <form  onSubmit={props.onSubmitChange}>
            <Inputtext
            onChange={props.onChangeHandler}
            name='name'
            label='Name:'
            value={props.name}
            type='text'
            placeholder='Enter Your Name'
            />
            <Inputtext
            onChange={props.onChangeHandler}
            name='email'
            label='E-mail:'
            value={props.email}
            type='email'
            placeholder='Enter Your E-mail'
            />
             <Inputtext
            onChange={props.onChangeHandler}
            name='birtDay'
            label='Birth-Day:'
            value={props.birthDay}
            type='date'
             
            />
             <Inputtext
            onChange={props.onChangeHandler}
            name='password'
            label='Password:'
            value={props.password}
            type='password'
            placeholder='Enter Your Password'
            />
            
            <div className='d-flex'>
               
               <GenderSelect 
               label='Male'
               type='radio'
               value='male'
               name='gender'
               onChange={props.onChangeHandler}
               />
                <GenderSelect 
               label='Female'
               type='radio'
               value='female'
               name='gender'
               onChange={props.onChangeHandler}
               />
                <GenderSelect 
               label='Other'
               type='radio'
               value='ohters'
               name='gender'
               onChange={props.onChangeHandler}
               />

            </div>
            <div className='form-gourp'>
                <label>
                    <input className='mx-2'
                type='checkbox'
                name='agree'
                checked={props.agree}
                onChange={props.handleAgreement}
                />
                Agree
                </label>
                
            </div>
            
              
                    <button 
                    className='container btn btn-primary'   
                    >
                        Create User</button>  
               
          
           
            </form>
        </div>
    )
}
Forms.propTypes={
    value:PropTypes.string,
    onSubmitChange:PropTypes.func,
    onChangeHandler:PropTypes.func,
    agree:PropTypes.bool.isRequired,
    handleAgreement:PropTypes.func
}

export default Forms
