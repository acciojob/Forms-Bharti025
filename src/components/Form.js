import React from 'react'
import Card from './Card'
const Form = () => {
  return (
    <div>
        <Card title="Form">
      <form id="info-form">
        <input id="full_name" type="text"/>
           <input id="email" type="email"/>
           <input id="password" type="password"/>
           <input type="password" id="password_confirmation"/>
      </form>
      </Card>
    </div>
  )
}

export default Form
