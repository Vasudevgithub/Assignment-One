/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav-bar.css';

const NavBar = () => {
    const contain = ['Explore' , 'About Us' ]
  return (
    <div className="TopNavBar">
      <nav>
        <ul>
            <li><h1>Your Logo</h1></li>
        </ul>
        <ul>
        {contain.map((item)=>(
            (
                <li><a href="#">{item}</a></li>
            )
        ))}
            {/* <li><a href="#">Explore</a></li>
            <li><a href="#">About Us</a></li> */}
            <li>
                <select className="TopNavDropdown">
                    <option>City</option>
                </select>
            </li>
            <li>
                <button className="TopNavBtn">Call</button>
            </li>
        </ul>       
      </nav>
    </div>
  )
}

export default NavBar
