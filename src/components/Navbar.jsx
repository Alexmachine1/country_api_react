import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  <div className='nav'>
     <Link className='btn' to='/'><h3>Where in the world?</h3> </Link>

    <h6>Dark Mode</h6>
  </div>

 
    </>
  )
}

export default Navbar