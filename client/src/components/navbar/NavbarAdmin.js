import * as React from 'react';
import { useState } from 'react'
import '../../styles/navbar/Navbar.css'

const NavbarAdmin = (props) => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-button">Decisions</div>
        <div className="navbar-button">Complaints</div>
        <div className="navbar-button">Announcements</div>
        <div className="navbar-button">Meetings</div>
        <div className="navbar-button">Users</div>
        <div className="navbar-button">Logout</div>
      </div>
    </div>
  )
}

export default NavbarAdmin;