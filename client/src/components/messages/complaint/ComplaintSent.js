import * as React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/ComplaintSent.css'

function returnToMainPage(history) {
    history.push('/owner')
}

const ComplaintSentMessage= () => {

    const history = useHistory()

    return (
        <div className="boxComplaint">
            <p className="complaintSent"> Complaint sent </p>
            <input type="button" className="returnButton" value="Return to main page" onClick={e => {returnToMainPage(history)}}/>
        </div>
    );

}

export default ComplaintSentMessage;