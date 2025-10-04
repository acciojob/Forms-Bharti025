import React,{useRef} from 'react'
import Card from './Card'
const FormRef = () => {
    const nameRef=useRef("");
    const emailRef=useRef("");
     const passwordRef=useRef("");
      const password_confirmRef=useRef("");

    const handleSubmit=(e)=>{
     e.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);
 console.log('Password_confirm:', password_confirmRef.current.value);
    }

  return (
      <Card title="Form using Ref">
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" type="text" ref={nameRef} placeholder='Full name'/>
           <input id="email" type="email" ref={emailRef} placeholder='Email'/>
           <input id="password" type="password" ref={passwordRef} placeholder='Password'/>
           <input type="password" id="password_confirmation" ref={password_confirmRef} placeholder='Password_Ref'/>
           <button type="submit">Submit</button>
      </form>
      </Card>
   
  )
}

export default FormRef