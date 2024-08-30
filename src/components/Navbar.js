import { click } from '@testing-library/user-event/dist/click';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        } 
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    TRjsdcjbs <i className='fab fa-typo3'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className ='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/knygos' className ='nav-links' onClick={closeMobileMenu}>Knygos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/fuckdiet' className ='nav-links' onClick={closeMobileMenu}>Fuck Diet Culture</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/vasarospec' className ='nav-links' onClick={closeMobileMenu}>Vasaros Special</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-upc' className ='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' title='SIGN UP'></Button>}
            </div>
        </nav>
    </>
    );   
}

export default Navbar

