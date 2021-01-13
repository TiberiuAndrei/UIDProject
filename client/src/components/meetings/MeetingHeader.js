import * as React from 'react'
import '../../styles/meetings/MeetingHeader.css';
import { useHistory } from 'react-router-dom';

const MeetingHeader = (props) => {

  const history = useHistory()

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