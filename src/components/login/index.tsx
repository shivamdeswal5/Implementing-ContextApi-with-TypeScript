import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import style from './style.module.css'

export default function Profile() {
    const [username,setUserName] = useState<string>();
    const [password,setPassword] = useState<string>();

    const {setUser,user} = useContext(UserContext); 

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        setUser({username:username,password:password})
        setUserName('');
        setPassword('');
        console.log("User:  ",user)
        
    }

  return (
    <div className={style.login} >
      <h2 >Login</h2>
      <input type="text" placeholder='Username' value={username} onChange={(e)=> setUserName(e.target.value)}/>
      <input type="text" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
