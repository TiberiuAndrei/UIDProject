import * as React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../../styles/navbar/Navbar.css'

function logout(history) {
  history.push('/')
}

function openLocalResources(history) {
  history.push('/guest/resources')
}

const NavbarGuest = (props) => {

  const history = useHistory();

  return (
    <div className="navbar">
      <div className="navbar-button" onClick={e => openLocalResources(history)}>Local Resources</div>
      <div className="navbar-button">Help</div>
      <div className="navbar-button">Leave Complaint</div>
      <div className="navbar-button" onClick={e => logout(history)}>Logout</div>
    </div>
  )
}

export default NavbarGuest;