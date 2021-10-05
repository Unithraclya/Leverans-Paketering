import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

//Styles
import CrAccStyle from '../css/CreateAccount.module.css'

// simplify fetch
async function simpleFetch(url, settings) {
  return await (await fetch(url, settings)).json();
}

export default function CreateAccount() {
  const [user, setUser] = useState([]);
  const [nameReg, setName] = useState('');
  const [mailReg, setMail] = useState('');
  const [passwordReg, setPassword] = useState('');


  //fetch all users

  // useEffect(() => {
  //   (async () => {
  //     //fetch all users
  //     setUser(await(await fetch('api/users')).json());
  //   })();
  // }, []);

 

  const register = async function(e) {
    console.log("Form submitted");
    e.preventDefault();

      await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     
      body: JSON.stringify({ 
         name:nameReg,
         mail:mailReg,
         password:passwordReg }   ,console.log(mailReg))
       
      
    },
    {withCredentials:true}
   

    ).then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
     console.log('Printing out json'); 
     console.log(res);
  })
  .catch((err) => {
      console.log(err);
  });

 [];

  }

  

  // A working fetch all users 

  // return (
  //   <div className="App">
  //       {users.map(({id, name, mail, password})=> 
  //           <div key={id}>
  //           <h3>{name} </h3>
  //           <p>Email: {mail}</p>
  //           <p>Birth date: {password}</p>
  //         </div>
  //       )}
  //   </div>
  // )



  return (
    <div className={CrAccStyle.Form} onSubmit={register}>
         
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
       placeholder="Mail"
       required
       />
       <input
       type="text"
       className={CrAccStyle.Password}
       onChange={e => setPassword(e.target.value)} 
       placeholder="password"
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

  


