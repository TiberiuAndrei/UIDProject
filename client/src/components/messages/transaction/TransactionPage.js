import * as React from 'react';
import NavbarOwner from '../../navbar/NavbarOwner'
import Transaction from "./Transaction";


const TransactionMessPage = () => {

    return (
        <div>
            <NavbarOwner />
            <div>
                <Transaction />
            </div>
        </div>


    );

}

export default TransactionMessPage;