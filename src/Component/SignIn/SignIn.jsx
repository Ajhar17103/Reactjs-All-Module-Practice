import React, { Component } from 'react'
import Forms from './Forms';


let initValues={
    name:'',
    email:'',
    password:'',
    birthDay:'',
    gender:''

}
export class SignIn extends Component {
    state={

        values:initValues,
        agree:false
    }
    onSubmitChange=(e)=>{
        e.preventDefault();
        let {isValid,errors}=this.validate()

         this.props.createUser(this.state.values)
            console.log(this.state);
            e.target.reset()
            this.setState({
                values:initValues,agree:false
          })
        
    }
    onChangeHandler=(e)=>{
        this.setState({
                 
                [e.target.name]: e.target.value
             
        })
    }
    handleAgreement=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    validate=()=>{
        let errors={}
        let {values:{name,password,gender,birthDay,email}}=this.state
        if(!name){
            errors.name='Please Provide Your Name'
        }
        if(!email){
            errors.email='Please Provide Your E-maail'
        }
        if(!password){
            errors.password='Please Provide Your Password'
        }
        if(!birthDay){
            errors.birthDay='Please Provide Your bithday'
        }
        if(!gender){
            errors.gender='Please Provide Your Gender'
        }
        return {
            errors,
            isValid: Object.keys(errors).length==0
        }
    
    }
    render() {
        return (
            <div>
                <Forms
                value={this.state.values, this.state.agree}
                onSubmitChange={this.onSubmitChange}
                onChangeHandler={this.onChangeHandler}
                handleAgreement={this.handleAgreement}
                />
                
            </div>
        )
    }
}

export default SignIn
