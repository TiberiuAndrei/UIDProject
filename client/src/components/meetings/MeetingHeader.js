import * as React from 'react'
import '../../styles/meetings/Meeting.css';

const MeetingHeader = (props) => {
  return (
    <div className="meeting">
      <div className="meeting-details">
        {props.data.name} Meeting - {props.data.hour}
      </div>
      <div className="comment-button">
        Comment
      </div>
    </div>
  )
}

export default MeetingHeader;