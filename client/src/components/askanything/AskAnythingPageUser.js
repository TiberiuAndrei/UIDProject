import * as React from 'react';
import '../../styles/AskAnything.css'
import NavbarOwner from '../navbar/NavbarOwner'
import AskAnything from "./AskAnything";


const AskAnythingPageUser = () => {

    return (
        <div>
            <NavbarOwner />
            <div>
                <AskAnything />
            </div>
        </div>


    );

}

export default AskAnythingPageUser;