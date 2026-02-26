import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee from './First/Employee'


function App() {
  return (
    <div>
      <h1>Example of html</h1>
      <h1>Welcome in this projrect</h1>
      {check()}
      <Employee></Employee>
    </div>
  )
       
  
}
function check()
{
  return(
    10+20
  )
}

export default App
