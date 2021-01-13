import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/RequestSent.css'

function returnToMainPage(history) {
    history.push("/owner")
}

const RequestSentMessage= () => {

    const history = useHistory()

    return (
        <div className="boxRequest">
            <p className="requestSent"> Request sent! </p>
            <input type="button" className="returnButton" value="Return to main page" onClick={e => {returnToMainPage(history)}}/>
        </div>
    );

}

export default RequestSentMessage;