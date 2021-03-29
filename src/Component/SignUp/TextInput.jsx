import React from 'react'
import PropTypes from'prop-types';

function TextInput(props) {
    return (
        <div className='form-group'>
            <label> 
               
                {props.label}

            </label>

            <input 
            className='container'
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            
            />
            
        </div>
    )
}
TextInput.propTypes={

    label:PropTypes.string,
    name:PropTypes.string,
    type:PropTypes.string,
    placeholder:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func
}

TextInput.defaultProps={
    type:'text',
    label:'',
    placeholder:''
}

export default TextInput;
