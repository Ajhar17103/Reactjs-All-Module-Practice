import React, { Component } from 'react'
import Form from './Form'
let init={
    name:'',
    email:'',
    password:'',
    birthday:'',
    gender:''
}

  class SignUp extends Component {
    state={
        values: init ,
        agree:false
    }
    onchangehandler=(e)=>{
        this.setState({
           values:{
               ...this.state.values, 
               [e.target.name]:e.target.value
        }
        })
    }
    handleAgreement=(e)=>{
        this.setState({
            agree:e.target.checked
        })
    }
    onSubmithandler=(e)=>{
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


        /* let data={}
       data.name=e.target.value.name;
        data.email=e.target.value.email;
        data.password=e.target.value.password;
        */
    
    render() {
      
        return (
            <div>
                 
                <Form
                values={this.state.values}
                agree={this.state.agree}
                onSubmithandler={this.onSubmithandler}
                onchangehandler={this.onchangehandler}
                handleAgreement={this.handleAgreement}
                />
            </div>
        )
    }

}
export default SignUp
