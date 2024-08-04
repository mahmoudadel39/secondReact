import React, { useState } from 'react'

export  function Counter() {



   const [count,setCount]=useState(0)

    let increaseHandler = ()=>{
        setCount(count+1)

    }
    let decreaseHandler = ()=>{
       {count>0 && setCount(count-1)} 
        
    }
  
    const [title,setTitle]=useState('Counter Component')
    let changeTitle=()=>{
        setTitle('New Title')

    }
    console.log("counter component ")
  return (
   
    <div className=" p-5 alert alert-dark m-5 rounded">
        { console.log("render")}
        <div className="container">
            <h1 className='text-center'>{title}</h1>
            <p className='lead fs-2 mt-4'>Count : <strong className='text-danger'>{count}</strong></p>
            {count<=0&&<p className='text-danger'>count value is 0</p>}
            <button onClick={increaseHandler} className="btn btn-success me-3">Increase</button>
            <button onClick={decreaseHandler} className="btn btn-danger me-3">Decrease</button>
            <button onClick={changeTitle} className="btn btn-primary">change Title</button>

        </div>

    </div>
  )
}
