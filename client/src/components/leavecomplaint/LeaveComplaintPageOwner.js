import * as React from 'react';
import '../../styles/AskAnything.css'
import NavbarGuest from '../navbar/NavbarGuest'
import LeaveComplaint from "./LeaveComplaint";


const LeaveComplaintPageGuest = () => {

    return (
        <div>
            <NavbarGuest />
            <div>
                <LeaveComplaint />
            </div>
        </div>


    );

}

export default LeaveComplaintPageGuest;