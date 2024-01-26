import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Sidebar.css';

const Sidebar = () => {

    const location = useLocation();
    return (
        <div className="sidebar">
            <div className="logo">
                {/* Your logo goes here */}
            </div>
            <hr />
            <div className="sidebar-items">
                <Link to="/my-projects"  className={`sidebar-item ${location.pathname === '/my-projects' ? 'active' : ''}`} >My Projects</Link>
                <Link to="/sample-projects" className={`sidebar-item ${location.pathname === '/sample-projects' ? 'active' : ''}`}>Sample Projects</Link>
                <hr />
                <Link to="/apps"  className={`sidebar-item ${location.pathname === '/apps' ? 'active' : ''}`} >Apps</Link>
                <Link to="/intro"  className={`sidebar-item ${location.pathname === '/intro' ? 'active' : ''}`} >Intro to Nucleo</Link>
            </div>
            <hr />
            <div className="sidebar-down">
                <Link to="/Help&support"  className={`sidebar-item ${location.pathname === '/Help&support' ? 'active' : ''}`} >Help & Support</Link>
                <Link to="/feedback"  className={`sidebar-item ${location.pathname === '/feedback' ? 'active' : ''}`} >Feedback</Link>
            </div>
        </div>
    );
}

export default Sidebar;
