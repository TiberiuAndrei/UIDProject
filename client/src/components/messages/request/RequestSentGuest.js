import * as React from 'react';
import NavbarGuest from '../../navbar/NavbarGuest'
import Request from "./RequesSent";


const RequestMessGuest = () => {

    return (
        <div>
            <NavbarGuest />
            <div>
                <Request />
            </div>
        </div>


    );

}

export default RequestMessGuest;