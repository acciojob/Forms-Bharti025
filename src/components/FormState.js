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
   
      <form id="form-state-link">
        <input id="full_name" type="text" onChange={()=>setName(e.target.value)}/>
           <input id="email" type="email"onChange={()=>setEmail(e.target.value)}/>
           <input id="password" type="password" onChange={()=>setPassword(e.target.value)}/>
           <input type="password" id="password_confirmation" onChange={()=>setPassword_confirmation(e.target.value)}/>
           <button onClick={handleSubmit}>Submit</button>
      </form>
  
  )
}

export default FormState