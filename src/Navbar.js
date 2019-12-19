import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-4">
      <div className="container">
        <Link className="brand-logo left" to="/">Delightful Inc.</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/addNewSequence'>Add New DNA Sequence</NavLink></li>
          <li><NavLink to='/viewSequences'>View Sequences</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)