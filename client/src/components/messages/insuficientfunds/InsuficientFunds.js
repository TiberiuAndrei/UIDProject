import * as React from 'react';
import '../../../styles/InsuficientFunds.css'


const InsufficientFundsMessage= () => {

    return (
        <div className="boxFunds">
            <p className="mess1"> Insufficient funds! </p>
            <p className="mess2"> Please add more funds and try again! </p>
            <input type="button" className="returnButton" value="Return to main page"/>
        </div>
    );

}

export default InsufficientFundsMessage;