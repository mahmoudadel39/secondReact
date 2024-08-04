import React from 'react'


export  function Login(props) {
    
   
   
  return (
    <div className='container-fluid bg-dark p-5 text-center'>
        <h1 className='text-warning mb-5'>login page</h1>
     {props.children}

    </div>
  )
}
