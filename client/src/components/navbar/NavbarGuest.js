import * as React from 'react';
import { useState } from 'react'
import '../../styles/navbar/Navbar.css'

const NavbarGuest = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-button">Local Resources</div>
      <div className="navbar-button">Help</div>
      <div className="navbar-button">Leave Complaint</div>
      <div className="navbar-button">Logout</div>
    </div>
  )
}

export default NavbarGuest;