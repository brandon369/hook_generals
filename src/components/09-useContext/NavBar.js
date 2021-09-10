import React from 'react'
import {
  Link, NavLink
} from "react-router-dom";

const NavBar = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Context</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact className="nav-link" activeClassName='active' to="/">Home</NavLink>
          <NavLink exact className="nav-link" activeClassName='active' to="/about">About</NavLink>
          <NavLink exact className="nav-link" activeClassName='active' to="/login">Login</NavLink>

        </div>
      </div>
    </nav>
  )
}

export default NavBar
