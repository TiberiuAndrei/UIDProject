import * as React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../../styles/navbar/Navbar.css'

function openMeetingsPage(history) {
  history.push('/admin/meetings')
}

const NavbarAdmin = (props) => {

  const history = useHistory();

  return (
    <div>
      <div className="navbar">
        <div className="navbar-button">Decisions</div>
        <div className="navbar-button">Complaints</div>
        <div className="navbar-button">Announcements</div>
        <div className="navbar-button" onClick={e => openMeetingsPage(history)}>Meetings</div>
        <div className="navbar-button">Users</div>
        <div className="navbar-button">Logout</div>
      </div>
    </div>
  )
}

export default NavbarAdmin;