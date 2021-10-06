import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

//Styles
import CrAccStyle from '../css/CreateAccount.module.css'


export default function CreateAccount() {
  const [nameReg, setName] = useState('');
  const [mailReg, setMail] = useState('');
  const [passwordReg, setPassword] = useState('');
  const [error, setError] = useState (null);
  const [nameError, setNameError] = useState('');
  const [mailError, setMailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  let history = useHistory();
  



  async function register(e) {
e.preventDefault();
      await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name:nameReg, mail:mailReg, password:passwordReg })
    },
    {withCredentials:true},

        ).then((res) => {
          if(!res.ok) {
            throw Error('Could not fetch data, try an unique e-mail');
          }else{
          console.log("registration res", res);
          setError(null);
          history.push('/')
        }})

      .catch((err) => {
          console.log("registration error", err);
          setError(err.message)
      });
    
      

     [];
      
     }


  return (
    <div className={CrAccStyle.Form} onSubmit={register}>
         {error && <div> {error} </div>}
      <form className={CrAccStyle.InlineForm}>
       <input 
       type="text" 
       className={CrAccStyle.Name}
       onChange={e => setName(e.target.value)} 
       placeholder="Namn"
       required
       />
       <input 
       type="text" 
       className={CrAccStyle.Mail}
       onChange={e => setMail(e.target.value)}
       placeholder="E-mail"
       required
       />
       <input
       type="text"
       className={CrAccStyle.Password}
       onChange={e => setPassword(e.target.value)} 
       placeholder="Lösenord"
       required
       />

      <input type="submit" className={CrAccStyle.Submit} onClick={register} value="Skapa konto" />
          <Link to="/" className={CrAccStyle.Cancel}> <label type="text">Avbryt</label></Link>
          
       
       </form>

        {/* {users.map(({id, name, mail, password})=> 
            <div key={id}>
            <h2>{name}</h2>
            <h3>{mail}</h3>
            <h3>{password}</h3>
        
        </div>
         ,console.log(users))}   */}
    </div>
  )
}

  


