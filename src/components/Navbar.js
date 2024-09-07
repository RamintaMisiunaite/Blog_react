import { click } from '@testing-library/user-event/dist/click';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import CreateBlog from './create';

function Navbar() {

    return (
    
    <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                <li>
                    <Link to="/" className="nav-links">Home</Link>
                </li>
                <li>
                    <Link to="/create_blogs" className="nav-links">Create blog</Link>
                </li>
                {/* <li>
                    <Link to="/bloglist_view" className="nav-links">Blog list</Link>
                </li> */}
                </ul>
            </div>
    </nav>
    );
      
}

export default Navbar

