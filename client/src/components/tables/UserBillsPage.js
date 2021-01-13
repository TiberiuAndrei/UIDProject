import * as React from 'react';
import NavbarOwner from '../navbar/NavbarOwner'
import UnpaidBillsUser from "./UnpaidBillsUser";
import PaidBillsUser from "./PaidBills";
import '../../styles/UserTablesPage.css';


const PayBillPage = () => {

    return (
        <div>
            <NavbarOwner/>
            <div className="tables-wrapper">
                <div className="table1">
                    <UnpaidBillsUser/>
                </div>

                <div className="table2">
                    <PaidBillsUser/>
                </div>
            </div>
        </div>


    );

}

export default PayBillPage;