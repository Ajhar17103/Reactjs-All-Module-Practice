import React from 'react'
import PropTypes from 'prop-types'

function Inputtext(props) {
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
            onChange={props.onChange}
            value={props.value}
            />

        </div>
         
    )
}
Inputtext.propTypes={
    name:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string,
    value:PropTypes.string,
    type:PropTypes.string,
    onChange:PropTypes.func
}
Inputtext.defaultProps={
    type:'text',
    label:'Name',
    placeholder: ''
}

export default Inputtext;
