import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-left">
            </div>
            <div className="nav-right">
                <div className="nav-item">Free Trial | <span>2 days left </span>
                <sub>Extend Free Trial</sub>
                </div>
                
                <div className="nav-item">Profile Photo</div>
                {/* Your dropdown component goes here */}
            </div>
        </div>
    );
}

export default Navbar;
