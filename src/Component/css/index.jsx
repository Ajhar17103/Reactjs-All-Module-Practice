import React, { Component } from 'react'
import '../css/style.css'
import hello from '../css/styles.module.css'
  class Css extends Component {
      header={
          backgroundColor:'black'
      }
    render() {
        console.log(this.header);
        return (
            <div style={this.header}>
                <h1>CSS</h1>
                <h1>this is the css style sheet and this is the main heading line in the header part</h1>
                
                <div>
                    <h1>module.css</h1>
                        <h1 className={'id'}>Somethings is comming....</h1>
                        <h2 className={hello.btn}>now is it module class </h2>
                </div>
            </div>

            
        )
    }
}

export default Css
