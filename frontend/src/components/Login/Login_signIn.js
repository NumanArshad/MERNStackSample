import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
      this.state = {username:'',password:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
      var user ={'username':this.state.username,'password':this.state.password}

      const postRequest =  fetch(ROOT_URL+'/api/Accounts/SignIn', {
            method: 'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
             mode: 'cors',
            body: JSON.stringify(user)
       }).then((response)=>{
        console.log('********'+response.status);
        response.json().then(data=>{
          console.log("data:......" + data.signInStatus )
        if(data.signInStatus=='failure'){
          store.dispatch({type:login_Actions.login_SignIn.FAILURE,payload:data});
          return ;
          }
        else if(data.signInStatus=='authorized') {
          store.dispatch({type:login_Actions.login_SignIn.AUTHORIZED,payload:data});
          return ;
        }
        else if(data.signInStatus == 'not_authorized'){
          store.dispatch({type:login_Actions.login_SignIn.NOT_AUTHORIZED,payload:data});
          return ;
        }
    
         });
       })
    
    }
    
 
    handleChange(event) {
        this.setState({[event.target.id] : event.target.value})
    }
 handleSubmit(event) {
        event.preventDefault();
        this.props.handleSignIn(this.state.username,this.state.password)

    }


    render() {
          var errorMessage = (this.props.status != undefined && this.props.status=="LOGIN_ACCOUNT_NOT_AUTHORIZED") ? "Username or password is incorrect" :""

        return (
          <form>
            <div style={{padding:'6%',width:'40%'}} >
            <h1>Login Here</h1>
                <p style={{color: 'red'}}>{errorMessage}</p>
               <input   id="username" label="Username" type="text" onChange={this.handleChange} value={this.state.username} />
               <br /><br />
               <input   id="password" label="Password" type="password" onChange={this.handleChange} value={this.state.password} />
               <br /><br />
               <button onClick={this.handleSubmit} type="submit">Login</button>
            </div>
        </form>
        );
    }
}

export default LoginForm
