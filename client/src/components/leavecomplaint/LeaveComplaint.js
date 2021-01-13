import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/LeaveComplaint.css'

function showMessage(history) {
    history.push('complaintSent')
}

const AskAnythingForm = () => {
    const history = useHistory()
    const [fullName, setFullName] = useState("");

    const [email, setEmail] = useState("");

    const [address, setAddress] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");

    const [question, setQuestion] = useState("");

    return (
        <div className="roundboxComplaint">
            <div className="form">
                <p>Leave a complaint</p>
                <form>
                    <label htmlFor="fname" className="namemargin">Full Name</label>
                    <input type="text" className="name" id="fullname" name="fullname" value={fullName}
                        onChange={e => setFullName(e.target.value)} />
                    <label htmlFor="email" className="emailMargin">Email</label>
                    <br />
                    <input type="text" className="emailGuest" id="email" name="email" value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <br />
                    <label htmlFor="address" className="addressMargin">Address</label>
                    <input type="text" className="address" id="address" name="address" value={address}
                        onChange={e => setAddress(e.target.value)} />
                    <label htmlFor="phoneNumber" className="phoneNumberMargin">Phone Number</label>
                    <input type="text" className="phoneNumber" id="phoneNumber" name="phoneNumber" value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)} />
                    <label htmlFor="question">Leave your message here</label>
                    <input type="text" className="questionComplaint" id="questionComplaint" name="questionComplaint" value={question}
                        onChange={e => setQuestion(e.target.value)} />
                </form>

                <div>
                    <button className="button" onClick={e => showMessage(history)}>Send</button>
                </div>

            </div>
        </div>
    );

}

export default AskAnythingForm;