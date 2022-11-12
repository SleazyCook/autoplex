import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="vehicles">VEHICLES</Link>
        <Link to="about">ABOUT US</Link> 
        <Link to="testimonials">TESTIMONIALS</Link>
        <Link to="contact">CONTACT</Link>
        <Link to="account">ACCOUNT</Link>
      </nav>
    </div>
  )
}

export default Navbar;