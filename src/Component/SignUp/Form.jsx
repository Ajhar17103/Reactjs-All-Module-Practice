import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'


function Form(values,onchangehandler,agree,handleAgreement,onSubmithandler) {
    return (
        <div className='container'>
          <form onSubmit={onSubmithandler} >
            <TextInput
            label='Name'
            type='text'
            placeholder='Enter Your Name'
            value={values.name}
            onChange={onchangehandler}

            />
             <TextInput
            label='E-mail'
            type='email'
            placeholder='Enter Your email'
            value={values.email}
            onChange={onchangehandler}

            />
             <TextInput
            label='BirthDay'
            type='date'
            placeholder='Enter Your Birth-Day'
            value={values.birthday}
            onChange={onchangehandler}
            />

           <TextInput
            label='Password'
            type='password'
            placeholder='Enter Your Password'
            value={values.password}
            onChange={onchangehandler}
            />

            <div className='form-group'>
            <label  >
                <input type='radio' name='gender' value='male' onChange={onchangehandler}
                />
                Male
            </label>
            <label  >
                <input type='radio' name='gender' value='Female' onChange={onchangehandler}
                />
                Female
            </label>
            <label  >
                <input type='radio' name='gender' value='Others' onChange={onchangehandler}
                />
               Other's 
            </label>

            </div>
            <div className='form-gourp'>
                <label>
                    <input
                type='checkbox'
                name='agree'
                checked={agree}
                onChange={handleAgreement}
                />
                Agree
                </label>
                
            </div>
              
              <button className='container btn btn-primary' type='submit'>Create User </button>
        </form>  
        </div>
    )
}
Form.propTypes={
    values:PropTypes.object,
    agree:PropTypes.bool,
    handleAgreement:PropTypes.func,
    onchangeandler:PropTypes.func,
    onSubmithandler:PropTypes.func
}
export default Form;
