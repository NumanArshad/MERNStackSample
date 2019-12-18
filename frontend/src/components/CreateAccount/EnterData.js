import React, { Component } from "react";
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {Data:''};
      
    }


    render() {
      

        return (
            <div style={{padding:'6%',width:'40%'}} >
            <h1>Register Here</h1>
              <p style={{color: 'red'}}>{errorMessage}</p>
               <input  label="Username" type="text" onChange={this.handleChange} value={this.state.username} />
               <br /><br />
         
               <button onClick={this.handleSubmit} type="submit">Register</button>
            </div>
        );
    }
}

export default Register
