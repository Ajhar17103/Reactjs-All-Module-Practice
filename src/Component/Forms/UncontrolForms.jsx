import React, { Component } from 'react'

  class UncontrolForms extends Component {
       
      handleSumit=(e)=>{
          e.preventDefault();
          let data={}
          data.name=e.target.name.value;
          data.email=e.target.email.value;
          data.password=e.target.password.value;
          console.log(data);  
      } 
    render() {
        
        return (
            <div>
                <form className='container' onSubmit={this.handleSumit}>
                <h1>Unconntrol Forms</h1>
                    <input
                     className='form-control my-2'
                    type="text" 
                    name='name' 
                   
                    placeholder='Enter Your Name'
                    />

                    <input 
                    className='form-control   my-2'
                    type="email" 
                    name='email' 
                    
                    placeholder='Enter Your E-mail'
                    />

                    <input 
                    className='form-control my-2'
                    type="password" 
                    name='password' 
                   
                    placeholder='Enter Your password'
                    />

                    <button 
                    className='form-control btn btn-success'
                    type='submit'
                    >
                   Submit
                
                </button>

                </form>
            </div>
        )
    }
}

export default UncontrolForms
