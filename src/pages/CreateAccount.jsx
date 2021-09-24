import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";

//Styles
import CrAccStyle from '../css/CreateAccount.module.css'

// simplify fetch
async function simpleFetch(url, settings) {
  return await (await fetch(url, settings)).json();
}

export default function CreateAccount() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [mail, setMail] = useState([]);
  const [password, setPassword] = useState([]);


  // fetch all users

  useEffect(() => {
    (async () => {
      //fetch all users
      setUser(await(await fetch('api/users')).json());
    })();
  }, []);


  async function addUser(name, mail, password) {
    let result = await simpleFetch('/api/users:id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, mail, password })
    });
    return result;
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
    <div className={CrAccStyle.Form}>
         
         <form>
       <input type="text" name={name} placeholder="Namn"/>
       <input type="text" mail={mail} placeholder="Mail"/>
       <input type="text" password={password} placeholder="password"/>

          <input type="submit" onClick={addUser} value="Skapa konto" />
        </form>

         {users.map(({id, name, mail, password})=> 
            <div key={id}>
            <h2>{name}</h2>
            <h3>{mail}</h3>
            <h3>{password}</h3>
        
        </div>
         )} 
    </div>
  )
}

  


