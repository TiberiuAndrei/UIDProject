import * as React from 'react';
import '../../styles/AskAnything.css'
import NavbarOwner from '../navbar/NavbarOwner'
import LeaveComplaint from "./LeaveComplaint";


const LeaveComplaintPageUser = () => {

    return (
        <div>
            <NavbarOwner />
            <div>
                <LeaveComplaint />
            </div>
        </div>


    );

}

export default LeaveComplaintPageUser;