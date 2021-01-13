import * as React from 'react';
import NavbarOwner from '../navbar/NavbarOwner'
import Request from "./PayBill";


const PayBillPage = () => {

    return (
        <div>
            <NavbarOwner />
            <div>
                <Request />
            </div>
        </div>


    );

}

export default PayBillPage;