import React from 'react'
import './Navbar1.css'

function Navbar1() {
  return (
    <div>
      <ul className='nav nn'>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/'>Home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/'>Service</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/'>About</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/'>Contact</a>
          </li>
      </ul>
    </div>
  )
}

export default Navbar1