// File: client/src/components/Leftsidebar/Leftsidebar.jsx

import React, { useState } from 'react';
import './Leftsidebar.css';
import { NavLink } from 'react-router-dom';
import Globe from "../../assets/Globe.svg";

const Leftsidebar = ({ slidein }) => {
    // These are the missing style definitions
    const slideinstyle = {
        transform: "translateX(0%)",
    };
    const slideoutstyle = {
        transform: "translateX(-100%)",
    };

    // This is the state for your collapsible menu
    const [isPublicMenuOpen, setIsPublicMenuOpen] = useState(true);

    return (
        // This line needs the style variables to work
        <div className="left-sidebar" style={slidein ? slideinstyle : slideoutstyle}>
            <nav className='side-nav'>
                <button className="nav-btnn">
                    <NavLink to='/' className="side-nav-links" activeclassname='active'>
                        <p>Home</p>
                    </NavLink>
                </button>

                <button type="button" className='nav-btnn' onClick={() => setIsPublicMenuOpen(!isPublicMenuOpen)}>
                    <p>PUBLIC</p>
                </button>

                <div className="side-nav-div">
                    {isPublicMenuOpen && (
                        <>
                            <button className='nav-btnn'>
                                <NavLink to='/Question' className='side-nav-links' activeclassname='active'>
                                    <img src={Globe} alt="globe" />
                                    <p style={{ paddingLeft: '10px' }}>Questions</p>
                                </NavLink>
                            </button>
                            <button className='nav-btnn'>
                                <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                                    <p>Tags</p>
                                </NavLink>
                            </button>
                            <button className='nav-btnn'>
                                <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                                    <p>Users</p>
                                </NavLink>
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Leftsidebar;