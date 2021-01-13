import * as React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../../styles/meetings/MeetingsPage.css'
import NavbarAdmin from '../navbar/NavbarAdmin';
import NavbarOwner from '../navbar/NavbarOwner';
import AddNewMeetingPage from './AddNewMeetingPage';
import MeetingHeader from './MeetingHeader';

const data = [
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "ME", content: "What happened?" },
      { sender: "Adina Fratila", content: "It really happens?" },
      { sender: "Ionescu Marius", content: "Yes, the repairing will begin next week" },
      { sender: "ME", content: "Ok. Great" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
]

function showMeetingDetails(history, meeting) {
  console.log(meeting);
  history.push({
    pathname: "meetings/meetingDetails",
    state: { meeting }
  })
}

function createMeeting(history) {
  history.push('meetings/newMeeting')
}

const MeetingsPage = (props) => {

  const history = useHistory()
  const [meeting, setMeeting] = useState({});
  const [triggerRender, setTriggerRender] = useState(1);

  var newMeeting = null
  if (props.location.state != undefined) {
    newMeeting = (props.location && props.location.state.newMeeting) || {}
  }
  if (newMeeting) {
    console.log(newMeeting);
    data.push(newMeeting)
  }

  return (
    <div>
      {props.match.params.user === "admin" ? <NavbarAdmin /> : <NavbarOwner />}

      <div className="container">
        <div className="green-container">
          <div className="content">
            <div className="meetings-title">Meetings</div>
            <div className="white-container">
              <div className="meetings-container" >
                {data.map(meeting => {
                  return (
                    <div onClick={e => {showMeetingDetails(history, meeting)}} >
                      <MeetingHeader data={meeting} />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="meetings-footer">
              <div className="button-add-meeting" onClick={e => { createMeeting(history) }}>
                Add New Meeting
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingsPage;