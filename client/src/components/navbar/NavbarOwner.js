import * as React from 'react';
import { useState } from 'react'
import '../../styles/Navbar.css'

const NavbarOwner = (props) => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-button">Decisions</div>
                <div className="navbar-button">Help</div>
                <div className="navbar-button">Leave Complaint</div>
                <div className="navbar-button">Announcements</div>
                <div className="navbar-button">Meetings</div>
                <div className="navbar-button">Taxes</div>
                <div className="navbar-button">Logout</div>
            </div>
        </div>
    )
}

export default NavbarOwner;