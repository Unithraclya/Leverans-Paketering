import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";

//Styles
import CrAccStyle from '../css/CreateAccount.module.css'


export default function CreateAccount() {

  const [name, setNameReg] = useState('');
  const [mail, setMailReg] = useState('');
  const [password, setPasswordReg] = useState('');

async function addUser() {
  let result = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, mail, password })
  }
  );
  return result;
}


  return (
    <div className={CrAccStyle.Form}>
         
      <form onSubmit={addUser}>
       <input 
       type="text" 
       placeholder="Användarnamn"
       username={name}
       onChange={(e) => {
       setNameReg(e.target.value);
       }} 
       />
       <input 
       type="text"
       placeholder="E-post"
       mail={mail}
       onChange={(e) => {
       setMailReg(e.target.value);
       }}
       />
       <input
       type="text"
       placeholder="Lösenord"
       password={password}
       onChange={(e) => {
       setPasswordReg(e.target.value);
       }}
       />
        <input 
        type="submit"
        placeholder="Skapa konto" 
        />
      </form>

    </div>
  )
}

  


