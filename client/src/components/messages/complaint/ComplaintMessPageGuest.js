import * as React from 'react';
import NavbarGuest from '../../navbar/NavbarGuest'
import ComplaintMess from "./ComplaintSent";


const ComplaintMessPage = () => {

    return (
        <div>
            <NavbarGuest />
            <div>
                <ComplaintMess />
            </div>
        </div>


    );

}

export default ComplaintMessPage;