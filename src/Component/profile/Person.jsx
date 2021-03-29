import React from 'react'
import Bio from './Bio'
import Skills from './Skills'

function Person(props) {
    return (
        <div className='container text-center'>
            <div className='card'> 
            <Bio name={props.name} title={props.title} />
             <hr/>
             <Skills/>
            </div>
             
        </div>
    )
}

export default Person
