import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [active, setActive] = useState("")

  return (
    <div className="container-fluid p-0 sticky-top">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="#" className="navbar-brand ml-lg-3">
                <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3"></i>E-learning</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/blog" className="nav-item nav-link">Blogs</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    <Link to="/dummy" className="nav-item nav-link">Dummy</Link>
                </div>
                <a href="#" className="btn btn-primary py-2 px-4 d-none d-lg-block">Log In</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar