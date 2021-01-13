import * as React from 'react';
import NavbarOwner from '../../navbar/NavbarOwner'
import ComplaintMess from "./ComplaintSent";


const ComplaintMessPageUser = () => {

    return (
        <div>
            <NavbarOwner />
            <div>
                <ComplaintMess />
            </div>
        </div>


    );

}

export default ComplaintMessPageUser;