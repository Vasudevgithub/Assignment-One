/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css'

const Footer = () => {
    const fcontain = [
        { title: 'Explore' },
        { title: 'About Us' }
    ]
    return (
      <section>
        <footer>
            <div className="main-container">
                <div className="FooterNavBar">
                    <nav>
                        <ul>
                            <li><h1>Your Logo</h1></li>
                        </ul>
                        <ul>
                            {fcontain.map((item)=>(
                                (
                                    <li><a href="#">{item.title}</a></li>
                                )
                            ))}
                            <li>
                                <select className="FooterNavDropdown">
                                    <option>City</option>
                                </select>
                            </li>
                            <li>
                                <button className="FooterNavBtn">Call</button>
                            </li>
                        </ul>       
                    </nav>
                </div>
            </div>
        </footer>
      </section>
    )
}

export default Footer
