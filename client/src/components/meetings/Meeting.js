import * as React from 'react';
import { useState } from 'react'
import '../../styles/meetings/Meeting.css'

function onSendButtonPressed (message, props, setTriggerRender, triggerRender) {
  props.data.messages.push({sender: "Utilizator curent", content: message})
  setTriggerRender(-triggerRender)
}

const Meeting = (props) => {

  const [message, setMessage] = useState("");
  const [triggerRender, setTriggerRender] = useState(1);

  return (
    <div className="container">
      <div className="green-container">
        <div className="content">
          <div className="meetings-title">{props.data.name}</div>

          <div className="white-container">
            {props.data.messages.map(msg => {
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
              <textarea value = {message} onChange = {e => setMessage(e.target.value)}/>
            </div>

            <div className="sendButton" onClick={e => onSendButtonPressed(message, props, setTriggerRender, triggerRender)}>
              <i class="material-icons">send</i>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Meeting;