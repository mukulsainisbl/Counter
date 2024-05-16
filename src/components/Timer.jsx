import React, { useState } from 'react'
import "../index.css"

const Timer = () => {

    const [count , setCount]  = useState(0)

    function handleAdding(){
       
        setCount(count + 1)
    }


    function handleDelete(){
        
        setCount(count - 1)
       if(count === 0){
       setCount(0)
       }
       
    }
  return (
    <div className='box'>
        <h2>Counter</h2>
        <h2>{count}</h2>
        <button  onClick={handleAdding}>Adding</button>
       
        <button onClick={handleDelete}>Delete</button>



    </div>

  )
}

export default Timer 