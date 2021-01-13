import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/Transaction.css'

function returnToMainPage(history) {
    history.push('/owner')
}

const TransactionMessage= () => {

    const history = useHistory()

    return (
        <div className="boxTransaction">
            <p className="transaction"> Transaction successful! </p>
            <input type="button" className="returnButton" value="Return to main page" onClick={e => returnToMainPage(history)}/>
        </div>
    );

}

export default TransactionMessage;