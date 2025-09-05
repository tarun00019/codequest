// File: client/src/components/Leftsidebar/Leftsidebar.jsx

// STEP 1: We've combined the two React imports into one correct line.
import React, { useState } from 'react';
import './Leftsidebar.css';
import { NavLink } from 'react-router-dom';
import Globe from "../../assets/Globe.svg";

// File: client/src/components/Leftsidebar/Leftsidebar.jsx

// ... (your imports and function definition up here) ...

const Leftsidebar = ({ slidein }) => {
    // ... (your styles and useState hook up here) ...
    const [isPublicMenuOpen, setIsPublicMenuOpen] = useState(true);

    return (
        <div className="left-sidebar" style={slidein ? slideinstyle : slideoutstyle}>
            <nav className='side-nav'>
                {/* Home button remains the same */}
                <button className="nav-btnn">
                    <NavLink to='/' className="side-nav-links" activeclassname='active'>
                        <p>Home</p>
                    </NavLink>
                </button>

                {/* MOVED: The PUBLIC button is now here, right below Home */}
                <button type="button" className='nav-btnn' onClick={() => setIsPublicMenuOpen(!isPublicMenuOpen)}>
                    <p>PUBLIC</p>
                </button>

                {/* This div now ONLY contains the collapsible items */}
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