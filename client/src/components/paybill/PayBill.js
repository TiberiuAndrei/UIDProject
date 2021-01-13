import * as React from 'react';
import '../../styles/PayBill.css';
import { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useHistory } from 'react-router-dom';

function showMessage(history) {
    history.push("/owner/taxes/transactionFailed")
}

const CreateUserForm = () => {

    const history = useHistory()

    const [cardNumber, setCardNumber] = useState("");
    const [cardNumberErr, setCardNumberErr] = useState("");

    const [expirationDate, setExpirationDate] = useState("");
    const [expirationDateErr, setExpirationDateErr] = useState("");

    const [cvcNumber, setCvcNumber] = useState("");
    const [cvcNumberErr, setCvcNumberErr] = useState("");

    const [Name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");

    const options = [
        'VISA', 'MASTERCARD', 'VISA ELECTRON'
    ];

    const defaultOption = options[0];

    const handleChange = () => {

    }


    return (
        <div className = "form-wrapper">
            <div className = "form-background">
                <div>
                    <div className = "user-form-title">Pay Bill</div>
                    <div className = "form-entry">
                        <div className = "form-entry-label">Card Number</div>
                        <input value = {cardNumber} onChange = {e => setCardNumber(e.target.value)}/>
                        <div className = "form-error">{cardNumberErr}</div>
                    </div>
                    <div className = "form-entry">
                        <div className = "form-entry-label">Expiration Date</div>
                        <input className="field1" value = {expirationDate} onChange = {e => setExpirationDate(e.target.value)}/>
                        <div className = "form-error">{expirationDateErr}</div>
                    </div>
                    <div className = "form-entry">
                        <div className = "form-entry-label">Cvc Number</div>
                        <input value = {cvcNumber} onChange = {e => setCvcNumber(e.target.value)}/>
                        <div className = "form-error">{cvcNumberErr}</div>
                    </div>
                    <div className = "form-entry">
                        <div className = "form-entry-label">Name</div>
                        <input value = {Name} onChange = {e => setName(e.target.value)}/>
                        <div className = "form-error">{nameErr}</div>
                    </div>

                    <Dropdown options={options} onChange={() => handleChange()} value={defaultOption} placeholder="Select an option" />

                    <div className = "button-wrapper">
                        <button className="user-form-send-button" onClick={e => showMessage(history)}>Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUserForm;