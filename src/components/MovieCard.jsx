import React from 'react'

export  function MovieCard(props) {
    let {movie}=props
  return (
    <div key={movie.id}className="col  col-sm-6 col-lg-3">
               <div className="card">
                <img src={movie.imgSrc} alt="" />
                <div className="card-body">
                    <p className="lead fs-2 fw-bold">{movie.name}</p>
                    <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, labore!</p>
                    <p className='lead'>rate: <strong className='text-warning'> {movie.rate}</strong></p>
                    <button className="btn btn-danger">Show Now
                    </button>
                </div>
               </div>
                    </div>
  )
}
