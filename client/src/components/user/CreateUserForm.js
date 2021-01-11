import * as React from 'react';
import '../../styles/user/CreateUserForm.css'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'

function routeWithNewData(firstName, setFirstNameErr, lastName, setLastNameErr, email, setEmailErr, phoneNumber, setPhoneNumber, address, setAddressErr, history) {
    setFirstNameErr(""); setLastNameErr(""); setEmailErr(""); setPhoneNumber(""); setAddressErr("");
    let isCorrect = true;
    if(firstName == "") {
        setFirstNameErr("First name can not be null");
        isCorrect = false;
    }
    
    if(lastName == "") {
        setLastNameErr("Last name can not be null");
        isCorrect = false;
    }

    if(email == "") {
        setEmailErr("First name can not be null");
        isCorrect = false;
    }

    if(phoneNumber == "") {
        setPhoneNumber("First name can not be null");
        isCorrect = false;
    }

    if(address == "") {
        setAddressErr("First name can not be null");
        isCorrect = false;
    }

    if(!isCorrect) {
        return;
    }

    history.push('/users/' + firstName + '/' + lastName + '/' + email + '/' + phoneNumber + '/' + address);
}

const CreateUserForm = () => {
    let history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [firstNameErr, setFirstNameErr] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberErr, setPhoneNumberErr] = useState("");
    
    const [address, setAddress] = useState("");
    const [addressErr, setAddressErr] = useState("");
    
    return (
        <div className = "form-wrapper">
        <div className = "form-background">
            <div>
            <div className = "user-form-title">User Profile</div>
            <div className = "form-entry">
                <div className = "form-entry-label">First Name</div>
                <input value = {firstName} onChange = {e => setFirstName(e.target.value)}/>
                <div className = "form-error">{firstNameErr}</div>
            </div>
            <div className = "form-entry">
                <div className = "form-entry-label">Last Name</div>
                <input value = {lastName} onChange = {e => setLastName(e.target.value)}/>
                <div className = "form-error">{lastNameErr}</div>
            </div>
            <div className = "form-entry">
                <div className = "form-entry-label">Email</div>
                <input value = {email} onChange = {e => setEmail(e.target.value)}/>
                <div className = "form-error">{emailErr}</div>
            </div>
            <div className = "form-entry">
                <div className = "form-entry-label">Phone number</div>
                <input value = {phoneNumber} onChange = {e => setPhoneNumber(e.target.value)}/>
                <div className = "form-error">{phoneNumberErr}</div>
            </div>
            <div className = "form-entry">
                <div className = "form-entry-label">Address</div>
                <input value = {address} onChange = {e => setAddress(e.target.value)}/>
                <div className = "form-error">{addressErr}</div>
            </div>
            <div className = "button-wrapper"><button className = "user-form-send-button" onClick = {e => {routeWithNewData(firstName, setFirstNameErr, lastName, setLastNameErr, email, setEmailErr, phoneNumber, setPhoneNumberErr, address, setAddressErr, history)}}>Save user</button></div>
            </div>
        </div>
        </div>
    );
}

export default CreateUserForm;