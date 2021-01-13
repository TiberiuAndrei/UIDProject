import * as React from 'react';
import { useState } from 'react'
import '../../styles/meetings/Meeting.css'
import NavbarAdmin from '../navbar/NavbarAdmin';
import NavbarOwner from '../navbar/NavbarOwner';

function onSendButtonPressed(message, meeting, setTriggerRender, triggerRender) {
  meeting.messages.push({ sender: "Utilizator curent", content: message })
  setTriggerRender(-triggerRender)
}

const Meeting = (props) => {

  const [message, setMessage] = useState("");
  const [triggerRender, setTriggerRender] = useState(1);

  var meeting = null
  var newMeeting = null
  if (props.location.state != undefined) {
    newMeeting = (props.location && props.location.state.meeting) || {}
  }
  if (newMeeting) {
    meeting = newMeeting
  }

  return (
    <div>
      {props.match.params.user === "admin" ? <NavbarAdmin /> : <NavbarOwner />}

      <div className="container">
        <div className="green-container">
          <div className="content">
            <div className="meetings-title">{meeting.name}</div>

            <div className="white-container">
              {meeting.messages.map(msg => {
                return (
                  <div className="message">
                    <span className="message-sender">{msg.sender}</span>
                    <span>{msg.content}</span>
                  </div>
                )
              })}
            </div>

            <div className="meetings-footer">
              <div className="inputField">
                <textarea value={message} onChange={e => setMessage(e.target.value)} />
              </div>

              <div className="sendButton" onClick={e => onSendButtonPressed(message, meeting, setTriggerRender, triggerRender)}>
                <i class="material-icons">send</i>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meeting;