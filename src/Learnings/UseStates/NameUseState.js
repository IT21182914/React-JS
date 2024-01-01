import React from 'react'
import { useState } from 'react'


function NameUseState() {

    const [name, setName] = useState('Dilan')
    const [age, setAge] = useState(24)

    const handleClick = () => {
   
    setName('Shanuka');
    setAge(25);

    }
    
  return (
    <div>
        
    <h1> Name: {name} </h1>
    <h1> Age: {age} </h1>

    <button onClick={handleClick}>Submit</button>



    </div>
  )
}

export default NameUseState