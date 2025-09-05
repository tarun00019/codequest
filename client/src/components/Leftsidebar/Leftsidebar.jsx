// File: client/src/components/Leftsidebar/Leftsidebar.jsx

// STEP 1: We've combined the two React imports into one correct line.
import React, { useState } from 'react';
import './Leftsidebar.css';
import { NavLink } from 'react-router-dom';
import Globe from "../../assets/Globe.svg";

const Leftsidebar = ({ slidein }) => {
    const slideinstyle = {
        transform: "translateX(0%)",
    };
    const slideoutstyle = {
        transform: "translateX(-100%)",
    };

    // STEP 2: Add state to control if the public menu is open or closed.
    const [isPublicMenuOpen, setIsPublicMenuOpen] = useState(true);

    return (
        <div className="left-sidebar" style={slidein ? slideinstyle : slideoutstyle}>
            <nav className='side-nav'>
                <button className="nav-btnn">
                    <NavLink to='/' className="side-nav-links" activeclassname='active'>
                        <p>Home</p>
                    </NavLink>
                </button>
                <div className="side-nav-div">
                    
                    {/* STEP 3: Make "PUBLIC" a clickable button that toggles the state. */}
                    <button type="button" className='nav-btnn' onClick={() => setIsPublicMenuOpen(!isPublicMenuOpen)}>
                        <p>PUBLIC</p>
                    </button>

                    {/* STEP 4: Conditionally render the links below based on the state. */}
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