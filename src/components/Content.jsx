import React from 'react'

export  function Content(props) {
   console.log(props)
   let {itemData}=props
   let {bgColor,TrackName,instName}=itemData
   
  return (
   <div className={`container-fluid p-5  ${bgColor}`}>
    <h1 className='mb-5'>{TrackName} Track</h1>
    <p className="lead mb-5">
      <strong className='text-danger'>{instName }</strong> 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nisi, quaerat ex ab quas fuga.

    </p>
    <button className="btn btn-danger">show me</button>
   </div>
  )
}