import * as React from 'react';
import { useState } from 'react'
import '../../styles/meetings/AddNewMeetingPage.css'

const AddNewMeetingPage = () => {

  return (
    <div className="container">
      <div className="green-container">
        <div className="content">
          <div className="title">
            <h2>Create new meeting</h2>
          </div>

          <div>
            <form id="form">
              <label for="title">Title</label>
              <input type="text" id="title" />
              <label for="hour">Hour</label>
              <input type="text" id="hour" />
              <label for="link">Link</label>
              <input type="text" id="link" />

              <div className="meeting-footer">
                <button type="submit" className="button">
                  Create meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewMeetingPage;