import * as React from 'react';
import '../../styles/WelcomeMessage.css'
import NavbarAdmin from '../navbar/NavbarAdmin'
import NavbarOwner from '../navbar/NavbarOwner'
import NavbarGuest from '../navbar/NavbarGuest'


const WelcomePage = (props) => {
    return (
        <div className="welcomeBox">

            <NavbarGuest />

            <p className="question"> What do you have in mind? </p>
        </div>
    );

}

export default WelcomePage;