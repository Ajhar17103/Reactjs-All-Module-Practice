import React, { Component } from 'react'

  class InpuForms extends Component {
    state={
        name:'',
        country:'',
        bio:'',
        birthDay:'',
        gender:'',
        agree:false,
        skills:''

    }
    handleChange=(e)=>{
         this.setState({
             [e.target.name]: e.target.value
         })
    }
    handleCheck=(e)=>{
        this.setState({
            agree: e.target.checked
        })
    }
    onChangeSkills=(e)=>{
        if(e.target.checked){
            this.setState(
                {
                    skills: [... this.state.skills, e.target.value]
                }
            )
        }
    }
    render() {
        let {name, country, bio,birthDay,agree,skills }=this.state
        return (
            <div>
                <h1>Info</h1>
                <input type='text' className='form-control my-2' name='name' placeholder='Enter Your Name' value={name} onChange={this.handleChange} />
                <select className='form-control my-2' name='country' value={country} onChange={this.handleChange} >
                    <option>Select Your Country</option>
                    <option value='BD'>BD</option>
                    <option value='UK'>UK</option>
                    <option value='USA'> USA</option>
                </select>
                <textarea className='form-control my-2' name='bio' value={bio} onChange={this.handleChange} /> 
                <input type="date" name='birthDay' className='form-control my-2'  value={birthDay} onChange={this.handleChange}/>
                <div className='form-control my-2'>
                    <input type="radio" name='gender'   value='Male' onChange={this.handleChange}/>
                    Male
                    <input type="radio" name='gender' className='mx-2' value='Female' onChange={this.handleChange}/>
                    Female
                    <input type="radio" name='gender' className='mx-2' value='Others' onChange={this.handleChange}/>
                    Other's
                </div>
                <div>
                    Skills: <br/>
                    <input type='checkbox' name='skills' value='java' checked={skills.includes('java')} onChange={this.onChangeSkills}/> 
                    Java
                    <input type='checkbox' name='skills' value='javaScript' checked={skills.includes('javaScript')} onChange={this.onChangeSkills}/> 
                    javaScript
                    <input type='checkbox' name='skills' value='React.js' checked={skills.includes('React.js')} onChange={this.onChangeSkills}/> 
                   React.js
                </div>
                 <div>
                    <input type="checkbox" name='agree' checked={agree} onChange={this.handleCheck} />
                    <span>Agree with all terms & condition</span>
                </div>
               
                <button className='form-control my-2 btn btn-success' onClick={()=>{
                    console.log(this.state);
                }}>Show Me</button>
            </div>
        )
    }
}

export default InpuForms
