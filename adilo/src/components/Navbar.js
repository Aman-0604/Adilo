import React from 'react'
import {Link} from "react-router-dom";
import '../styles/navbar.css' 

export default function Navbar() {

    const logoutHandler=()=>{
        localStorage.removeItem('token');
        console.log('Logout Successful');
    }

    return (
        <div className='navbar-main d-flex flex-row justify-content-center align-items-center'>
            <nav className="nav navbar navbar-expand-lg navbar-dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="../images/logo.png" alt="Adol" width="120" height="55" className="d-inline-block align-text-top"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li classame="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li classame="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <div className="d-flex">
                            <Link to="/login"><button type="button" className="nav-btn">Login</button></Link>
                        </div>:<div className="d-flex">
                            <Link to="/login"><button type="button" onClick={logoutHandler} className="nav-btn">Logout</button></Link>
                        </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
