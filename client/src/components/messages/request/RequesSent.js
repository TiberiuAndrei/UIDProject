import * as React from 'react';
import '../../../styles/RequestSent.css'


const RequestSentMessage= () => {

    return (
        <div className="boxRequest">
            <p className="requestSent"> Request sent! </p>
            <input type="button" className="returnButton" value="Return to main page"/>
        </div>
    );

}

export default RequestSentMessage;