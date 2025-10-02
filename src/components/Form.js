import React from 'react'
import Card from './Card'
const Form = () => {
  return (
  
        <Card title="Form">
      <form id="form-link">
        <input id="full_name" type="text"/>
           <input id="email" type="email"/>
           <input id="password" type="password"/>
           <input type="password" id="password_confirmation"/>
      </form>
      </Card>
 
  )
}

export default Form
