import React, { Component } from 'react'

export class ControlForms extends Component {
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
             
              <form className='container' onSubmit={this.handleSumit}>
              <h1>Control Forms</h1>
                  <input
                   className='form-control my-2'
                  type="text" 
                  name='name' 
                  value={name}
                 onChange={this.handleChange}
                  placeholder='Enter Your Name'
                  />

                  <input 
                  className='form-control   my-2'
                  type="email" 
                  name='email' 
                  value={email}
                  onChange={this.handleChange}
                  placeholder='Enter Your E-mail'
                  />

                  <input 
                  className='form-control my-2'
                  type="password" 
                  name='password' 
                  value={password}
                  onChange={this.handleChange}
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

export default ControlForms
