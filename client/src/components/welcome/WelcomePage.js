import * as React from 'react';
import '../../styles/WelcomeMessage.css'
import NavbarAdmin from '../navbar/NavbarAdmin'
import NavbarOwner from '../navbar/NavbarOwner'


const WelcomePage = (props) => {
    return (
        <div className="welcomeBox">

            {props.match.params.user === "admin" ? <NavbarAdmin /> : <NavbarOwner />}


            <p className="question"> What do you have in mind? </p>
        </div>
    );

}

export default WelcomePage;