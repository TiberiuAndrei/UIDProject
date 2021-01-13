import * as React from 'react';
import '../../styles/AskAnything.css'
import NavbarGuest from '../navbar/NavbarGuest'
import AskAnything from "./AskAnything";


const AskAnythingPage = () => {

    return (
        <div>
            <NavbarGuest />
            <div>
                <AskAnything />
            </div>
        </div>


    );

}

export default AskAnythingPage;