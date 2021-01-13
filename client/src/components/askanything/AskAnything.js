import * as React from 'react';
import {useState} from 'react';
import '../../styles/AskAnything.css'


const AskAnythingForm = () => {
    const [fullName, setFullName] = useState("");

    const [email, setEmail] = useState("");

    const [question, setQuestion] = useState("");

    return (
        <div className="roundbox">
            <div className="form">
                <p>Ask anything</p>
                <form>
                    <label htmlFor="fname" className="namemargin">Full Name</label>
                    <input type="text" className="name" id="fullname" name="fullname" value={fullName}
                           onChange={e => setFullName(e.target.value)}/>
                    <label htmlFor="email" className="emailMaargin">Email</label>
                    <input type="text" className="emailAsk" id="emailAsk" name="emailAsk" value={email}
                           onChange={e => setEmail(e.target.value)}/>

                    <label htmlFor="question">Leave your message here</label>
                    <input type="text" className="questionForm" id="questionForm" name="questionForm" value={question}
                           onChange={e => setQuestion(e.target.value)}/>
                </form>

                <div>
                    <button className="button">Send</button>
                </div>

            </div>
        </div>
    );

}

export default AskAnythingForm;