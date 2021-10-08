import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import { mailRegex, passRegex } from '../Reg/Reg';

//Styles
import CrAccStyle from '../css/CreateAccount.module.css'


export default function Login() {
  const [mailReg, setMail] = useState('');
  const [passwordReg, setPassword] = useState('');
  
  // Error Database
  const [emailError, setError] = useState (null);


  //Validation 
  const [passwordError, setPasswordError] = useState('');
  const [emailErrorVer, setEmailErrorVer] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [Logintext, setLoginText] = useState("");


  let history = useHistory();
  
  const validate = () => {
     const emailErrorVer = {};
     const passwordError = {};
     let isValid = true;


    if(!passRegex.test(passwordReg)){
      passwordError.passwordInclude = "Min 8 bokstäver 1 stor bokstav och 1 siffra";
      isValid = false;
    }

    if(!mailRegex.test(mailReg)){
      emailErrorVer.emailInclude = "Vänligen fyll i en giltig email adress ";
      isValid = false;
    }
   
    setPasswordError(passwordError);
    setEmailErrorVer(emailErrorVer);

    return isValid;
  };

    
 

  async function login(e) {
    e.preventDefault();
  const isValid = validate();
  if(isValid){
      await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({mail:mailReg, password:passwordReg })
      }).then((response) => {
            console.log("response",response);
            response.json().then((data) => {
                console.log("data",data);
                console.log("response",response);
                console.log("response data",response.data);
                console.log("response message",response.message);


            });
                  if(!response.ok) {
                    throw Error('Kunde inte logga in');
                  }else{
                  console.log("login res", response.data);
                 
                  
                  setLoginText("logged in", response);
                  setError(null);
                  // history.push('/')
                }})
        
              .catch((err) => {
                  console.log("login error", err);
                  setError(err.message)
              });
          }
              
          if (isLoggedIn) {
              history.push('/');
          }
             [];
              
             }
          // Old code
        //   fetch(request).then((response) => {
        //     console.log(response);
        //     response.json().then((data) => {
        //         console.log(data);
        //     });
        // });

      // }).then((response) => {
  //           if(!response.ok) {
  //             throw Error('Kunde inte logga in');
  //           }else{
  //           console.log("login res", response);
  //           console.log(response);
            
  //           setLoggedIn(true);
  //           setError(null);
  //           history.push('/')
  //         }})
  
  //       .catch((err) => {
  //           console.log("login error", err);
  //           setError(err.message)
  //       });
  //   }
        
  //   if (isLoggedIn) {
  //       history.push('/');
  //   }
  //      [];
        
  //      }

  return (
    <div className={CrAccStyle.Form} onSubmit={login}>
         {emailError && <div> {emailError} </div>}
      <form onDoubleClick={validate} className={CrAccStyle.InlineForm}>
      
       <input 
       type="text" 
       className={CrAccStyle.Mail}
       onChange={e => setMail(e.target.value)}
       placeholder="E-mail"
       value={mailReg}
       required
       />
        {Object.keys(emailErrorVer).map((key)=> {
         return <div className={CrAccStyle.ErrorMail} key={key} style ={{color : "red"}}> {emailErrorVer[key]}</div>
       })}
       <input
       type="text"
       className={CrAccStyle.Password}
       onChange={e => setPassword(e.target.value)} 
       placeholder="Lösenord"
       value={passwordReg}
       onClick={validate}
       required
       />
      {Object.keys(passwordError).map((key)=> {
         return <div className={CrAccStyle.ErrorPassword} key={key} style ={{color : "red"}}> {passwordError[key]}</div>
       })}
        <h2>hej{Logintext}</h2>
      <input type="submit" className={CrAccStyle.Submit} onClick={login} value="Login" />
          <Link to="/" className={CrAccStyle.Cancel}> <label type="text">Avbryt</label></Link>
          
         
       </form>
       
    </div>
  )
}