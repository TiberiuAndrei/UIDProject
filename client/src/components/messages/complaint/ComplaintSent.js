import * as React from 'react';
import {useState} from 'react';
import '../../../styles/ComplaintSent.css'


const ComplaintSentMessage= () => {

    return (
        <div className="boxComplaint">
            <p className="complaintSent"> Complaint sent </p>
            <input type="button" className="returnButton" value="Return to main page"/>
        </div>
    );

}

export default ComplaintSentMessage;