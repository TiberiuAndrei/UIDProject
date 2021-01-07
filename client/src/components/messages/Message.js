import * as React from 'react';
import { useState } from 'react'
import '../../styles/messages/Message.css'

const Message = (props) => {
  return (
    <div className="container">
      <div className="content-message">
        <div className="info-message">
          <div className="title-message">
            <h2>{props.message}</h2>
          </div>

          <div>
            <div className="button-message">
              Return to main page
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;