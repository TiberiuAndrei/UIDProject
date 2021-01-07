import * as React from 'react';
import { useState } from 'react'
import '../../styles/decisions/Decision.css'
import '../../styles/decisions/DecisionsPage.css'

function onLikeButtonPressed(props, likeDisabled, setLikeDisabled, dislikeDisabled, setDislikeDisabled, setTriggerRender, triggerRender) {
  if (!likeDisabled || !dislikeDisabled) {
    props.data.like++
    setTriggerRender(-triggerRender)
    setLikeDisabled(true)
    setDislikeDisabled(true)
  }
}

function onDislikeButtonPressed(props, dislikeDisabled, setDislikeDisabled, likeDisabled, setLikeDisabled, setTriggerRender, triggerRender) {
  if (!dislikeDisabled || !likeDisabled) {
    props.data.dislike++
    setTriggerRender(-triggerRender)
    setDislikeDisabled(true)
    setLikeDisabled(true)
  }
}

const Decision = (props) => {
  const [likeDisabled, setLikeDisabled] = useState(false)
  const [dislikeDisabled, setDislikeDisabled] = useState(false)
  const [triggerRender, setTriggerRender] = useState(1);

  return (
    <div className="decision">
      <div className="decision-header">
        <div
          className="decision-icons"
          onClick={e => onLikeButtonPressed(props, likeDisabled, setLikeDisabled, dislikeDisabled, setDislikeDisabled, setTriggerRender, triggerRender)}>
          <p>
            {props.data.like}
          </p>
          <i class="material-icons">thumb_up</i>
        </div>
        <div>{props.data.title}</div>
        <div
          className="decision-icons"
          onClick={e => onDislikeButtonPressed(props, dislikeDisabled, setDislikeDisabled, likeDisabled, setLikeDisabled, setTriggerRender, triggerRender)}>
          <i class="material-icons">thumb_down</i>
          <p>
            {props.data.dislike}
          </p>
        </div>
      </div>
      <div className="decision-details">
        {props.data.details.map(detail => {
          return (
            <p className="detail">{detail}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Decision;