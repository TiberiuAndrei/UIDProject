import * as React from 'react';
import '../../../styles/Transaction.css'


const TransactionMessage= () => {

    return (
        <div className="boxTransaction">
            <p className="transaction"> Transaction successful! </p>
            <input type="button" className="returnButton" value="Return to main page"/>
        </div>
    );

}

export default TransactionMessage;