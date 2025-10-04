import React,{useState} from 'react'
import Card from './Card';
const FormState = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [password_confirmation,setPassword_confirmation]=useState("");

const handleSubmit=(e)=>{
 e.preventDefault();
 console.log(name);
 console.log(email);
 console.log(password);
 console.log(password_confirmation);

}
  return (

      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" type="text" onChange={(e)=>setName(e.target.value)}/>
           <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
           <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
           <input type="password" id="password_confirmation" onChange={(e)=>setPassword_confirmation(e.target.value)}/>
           <button type='submit'>Submit</button>
      </form>
  
  )
}

export default FormState