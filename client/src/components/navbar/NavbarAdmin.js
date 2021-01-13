import * as React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../../styles/navbar/Navbar.css'

function openMeetingsPage(history) {
  console.log("here i am");
  history.push('/admin/meetings')
}

function openAnnouncementsPage(history) {
  history.push('/admin/announcements')
}

function openUsersPage(history) {
  history.push('/admin/users')
}

function logout(history) {
  history.push("/")
}

function openComplaintsPage(history) {
  history.push('/admin/complaints')
}

function openDecisionsPage(history) {
  history.push('/admin/decisions')
}

const NavbarAdmin = (props) => {

  const history = useHistory();

  return (
    <div>
      <div className="navbar">
        <div className="navbar-button" onClick={e => {openDecisionsPage(history)}}>Decisions</div>
        <div className="navbar-button" onClick={e => {openComplaintsPage(history)}}>Complaints</div>
        <div className="navbar-button" onClick={e => openAnnouncementsPage(history)}>Announcements</div>
        <div className="navbar-button" onClick={e => openMeetingsPage(history)}>Meetings</div>
        <div className="navbar-button" onClick={e => openUsersPage(history)}>Users</div>
        <div className="navbar-button" onClick={e => logout(history)}>Logout</div>
      </div>
    </div>
  )
}

export default NavbarAdmin;