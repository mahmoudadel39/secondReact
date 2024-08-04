import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { MovieCard } from './MovieCard'
 
export  function Movies( props) {
    let{movieData}=props
   
  return (
    
  <div className="container-fluid bg-dark  text-center p-5">
    <h1 className='text-danger text-center fs-1 fw-bold mb-5  '>Movie List</h1>
    <div className="row">
        {
            movieData.map((movie,i)=>{
                return(
<MovieCard key={i} movie={movie}></MovieCard>

                )
            })
        }
    </div>
  </div>
  
  )
}
