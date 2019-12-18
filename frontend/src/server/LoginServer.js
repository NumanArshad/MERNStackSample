
import {login_Actions} from '../constants/Login'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';

export const loginServer = {
handleSignIn: handleSignIn
}

export function handleSignIn(username,password)
{
  var user ={'Username':username,'password':password}

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


return {type:login_Actions.login_SignIn.NEW,payload:'none'};

};
