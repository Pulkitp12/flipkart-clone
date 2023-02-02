import React from 'react';
import '../components/css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand title" to="/"><i>Flipkart</i></Link>
                <Link className='explore' to='/'><i>Explore <span style={{color:"yellow"}}>Plus</span></i></Link>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search for products, brand and more" aria-label="Search"/>
                    <button className="btn search" type="submit"><i className="fa fa-x fa-search"></i></button>
                </form>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="btn login" aria-current="page" href="/">LOGIN</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link seller" href="/">Become a Seller</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle more" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link cart" to='/cart' id='cart'><i className="fa fa-shopping-cart cart"></i>Cart</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>  
    </div>
  )
}

export default Navbar