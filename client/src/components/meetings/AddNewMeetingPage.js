import * as React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/meetings/AddNewMeetingPage.css'
import NavbarOwner from '../../components/navbar/NavbarOwner'
import NavbarAdmin from '../../components/navbar/NavbarAdmin'

function redirectWithNewMeeting(match, history, title, hour, link) {
  match.params.user === "admin" ?
    history.push({
      pathname: '/admin/meetings',
      state: {
        newMeeting: {
          name: title,
          hour: hour,
          link: link,
        }
      }
    }) :
    history.push({
      pathname: '/owner/meetings',
      state: {
        newMeeting: {
          title: title,
          hour: hour,
          link: link,
        }
      }
    })
}

const AddNewMeetingPage = ({ match }) => {

  let history = useHistory();
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState("");
  const [link, setLink] = useState("");

  return (
    <div>
      {match.params.user === "admin" ? <NavbarAdmin /> : <NavbarOwner />}

      <div className="container">
        <div className="green-container">
          <div className="content">
            <div className="title">
              <h2>Create new meeting</h2>
            </div>

            <div>
              <form id="form" className="newMeetingForm">
                <label for="title" className="newMeetingLabel">Title</label>
                <input type="text" id="title" className="newMeetingInput" value={title} onChange={e => setTitle(e.target.value)} />
                <label for="hour" className="newMeetingLabel">Hour</label>
                <input type="text" id="hour" className="newMeetingInput" value={hour} onChange={e => setHour(e.target.value)} />
                <label for="link" className="newMeetingLabel">Link</label>
                <input type="text" id="link" className="newMeetingInput" value={link} onChange={e => setLink(e.target.value)} />

                <div className="meeting-footer">
                  <button type="submit" className="button" onClick={e => { redirectWithNewMeeting(match, history, title, hour, link) }}>
                    Create meeting
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewMeetingPage;