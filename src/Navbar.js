import React from 'react'
import'./NavbarStyles.css';
import { Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    
    <div>
    <nav>
       
            <ul id='navbar'>
                <li>
                    {/* <a className='active' href='index.html'>Home</a> </li> */}
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    {/* <a href='index.html'>About</a>  */}
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    {/* <a href='index.html'>Contact Us</a>  */}
                    <Link to='/contact'>Contact</Link>

                    
                </li>
            </ul>
    </nav>

</div>
    </>
  )
}

export default Navbar