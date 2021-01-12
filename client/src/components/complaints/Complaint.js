import * as React from 'react';
import { useState } from 'react'
import '../../styles/complaints/Complaint.css'

const Complaint = (props) => {
  const [message, setMessage] = useState("");
  const [triggerRender, setTriggerRender] = useState(1);

  return (
    <div className="announcement-container">
      <div className="announcement-top-border">
        {props.data.name}
      </div>
      <div className="announcement">
        <span className="announcement-text">{props.data.content}</span>
      </div>
      <div className="announcement-bottom-border">
        <div className="announcement-bottom-border-content">
          <p>Solved</p>
          <input type="checkbox" id="switch"
            class="checkbox" />
          <label for="switch" class="toggle" />
        </div>
      </div>
    </div>
  )
}

export default Complaint;