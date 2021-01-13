import * as React from 'react';
import NavbarOwner from '../navbar/NavbarOwner'
import Request from "./PayBill";


const PayBillPage = () => {

    console.log("am ajuns aici");
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