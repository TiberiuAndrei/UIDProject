import * as React from 'react';
import NavbarOwner from '../../navbar/NavbarOwner'
import InsufficientFunds from "./InsuficientFunds";


const ComplaintMessPage = () => {

    return (
        <div>
            <NavbarOwner />
            <div>
                <InsufficientFunds />
            </div>
        </div>


    );

}

export default ComplaintMessPage;