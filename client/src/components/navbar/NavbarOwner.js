import * as React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../../styles/navbar/Navbar.css'

function openMeetingsPage(history) {
  console.log("here i am");
  history.push('/owner/meetings')
}

function openAnnouncementsPage(history) {
  history.push('/owner/announcements')
}

function logout(history) {
  history.push("/")
}

function openDecisionsPage(history) {
  history.push('/owner/decisions')
}

function openTaxesPage(history) {
  history.push('/owner/taxes')
}

function openHelpPage(history) {
  history.push('/owner/help')
}

function openLeaveComplaint(history) {
  history.push('/owner/leaveComplaint')
}

const NavbarOwner = (props) => {

  const history = useHistory()

  return (
    <div>
      <div className="navbar">
        <div className="navbar-button" onClick={e => { openDecisionsPage(history) }}>Decisions</div>
        <div className="navbar-button" onClick={e => { openHelpPage(history) }}>Help</div>
        <div className="navbar-button" onClick={e => { openLeaveComplaint(history) }}>Leave Complaint</div>
        <div className="navbar-button" onClick={e => openAnnouncementsPage(history)}>Announcements</div>
        <div className="navbar-button" onClick={e => openMeetingsPage(history)}>Meetings</div>
        <div className="navbar-button" onClick={e => { openTaxesPage(history) }}>Taxes</div>
        <div className="navbar-button" onClick={e => logout(history)}>Logout</div>
      </div>
    </div>
  )
}

export default NavbarOwner;