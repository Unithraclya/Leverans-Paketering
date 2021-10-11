import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import { mailRegex, passRegex } from '../Reg/Reg';

//Styles
import CrAccStyle from '../css/CreateAccount.module.css'

// simplify fetch
async function simpleFetch(url, settings) {
  return await (await fetch(url, settings)).json();
}

export default function CreateAccount() {
  const [nameReg, setName] = useState('');
  const [mailReg, setMail] = useState('');
  const [passwordReg, setPassword] = useState('');
  
  // Error Database
  const [emailError, setError] = useState (null);


  //Validation 
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailErrorVer, setEmailErrorVer] = useState('');


  let history = useHistory();
  
  const validate = () => {
     const nameError = {} ;
     const emailErrorVer = {};
     const passwordError = {};
     let isValid = true;

    if(nameReg.length < 2 ){
      nameError.nameShort = "Minst 2 bokstäver";
      isValid = false;
    }

    if(nameReg.length > 15){
      nameError.nameLong = "Längst 15 bokstäver";
      isValid = false;
    }

    if(!passRegex.test(passwordReg)){
      passwordError.passwordInclude = "Min 8 bokstäver 1 stor bokstav och 1 siffra";
      isValid = false;
    }

    if(!mailRegex.test(mailReg)){
      emailErrorVer.emailInclude = "Vänligen fyll i en giltig email adress ";
      isValid = false;
    }
   
    setNameError(nameError);
    setPasswordError(passwordError);
    setEmailErrorVer(emailErrorVer);

    return isValid;
  };

    


  async function register(e) {
e.preventDefault();
  const isValid = validate();
  if(isValid){
     await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name:nameReg, mail:mailReg, password:passwordReg })
  },

        ).then((res) => {

          if(!res.ok) {
            throw Error('Kunde inte skapa konto, försök med en annan email');

          }else{
          console.log("registration res", res);
          setError(null);
          history.push('/loginpage')
        }})

      .catch((err) => {
          console.log("registration error", err);
          setError(err.message)
      });
  }
      

     [];
      
     }
    

  return (
    <div className={CrAccStyle.Form} onSubmit={register}>
         {emailError && <div> {emailError} </div>}
      <form onDoubleClick={validate} className={CrAccStyle.InlineForm}>
       <input 
       type="text" 
       className={CrAccStyle.Name}
       onChange={e => setName(e.target.value)} 
       placeholder="Namn"
       value={nameReg}
       required
       
       />
       {Object.keys(nameError).map((key)=> {
         return <div className={CrAccStyle.ErrorName} key={key} style ={{color : "red"}}> {nameError[key]}</div>
       })}
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
      <input type="submit" className={CrAccStyle.Submit} onClick={register} value="Skapa konto" />
          <Link to="/" className={CrAccStyle.Cancel}> <label type="text">Avbryt</label></Link>
          
       
       </form>

    </div>
  )
}

  


