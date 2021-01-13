import * as React from 'react';
import { useState } from 'react'
import '../../styles/announcement/Announcement.css'
import '../../styles/announcement/OpenedAnnouncement.css'


function onButtonPressed (value, setIsClosed) {
    setIsClosed(!value)
}

function onSendButtonPressed (message, props, setTriggerRender, triggerRender) {
    props.data.messages.push({sender: "ME", content: message})
    setTriggerRender(-triggerRender)
}

const Announcement = (props) => {
    const [isClosed, setIsClosed] = useState(true);
    const [message, setMessage] = useState("");
    const [triggerRender, setTriggerRender] = useState(1);
    if(isClosed)
    {
        return (
            <div className = "announcement-container">
                <div className = "announcement-top-border">
                    {props.data.date}
                </div>
                <div className = "announcement">
                    <span className = "announcement-text">{props.data.text}</span>
                </div>
                <div className = "announcement-bottom-border">
                    <button className = "announcement-discuss-button" onClick = {e => onButtonPressed(isClosed, setIsClosed)}>Discuss</button>
                </div>
            </div>
        );
    } 
    else 
    {
        return (
            <div className = "announcement-container">
                <div className = "announcement-top-border">
                    {props.data.date}
                </div>
                <div className = "announcement">
                    <span className = "announcement-text">{props.data.text}</span>
                </div>
                <div className = "drop-down-menu">
                    <button className = "hide-button" onClick = {e => onButtonPressed(isClosed, setIsClosed)}>hide conversation</button>
                    <div className = "message-list">
                        {props.data.messages.map(message => {
                            return (
                                <div className = "message">
                                    <span className = "message-sender">{message.sender}</span>
                                    <span>{message.content}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className = "input-and-send-button">
                        <textarea className = "message-input" rows = "3" cols = "24" style = {{resize: "none"}} value = {message} onChange = {e => setMessage(e.target.value)}/>
                        <button className = "send-button" onClick = {e => onSendButtonPressed(message, props, setTriggerRender, triggerRender)}>Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Announcement;