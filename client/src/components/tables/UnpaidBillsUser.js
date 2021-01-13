import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/UnpaidBills.css';
import exclamation from '../../images/exclamation mark.jpg'

let unpaidBillsData = [{billName: "intretinere", dateOfIssue: "02.11.2020", dueDate: "15.11.2020", dueValue: "20 RON"},
    {billName: "intretinere", dateOfIssue: "23.12.2020", dueDate: "17.01.20221", dueValue: "100 RON"},
    {billName: "curent", dateOfIssue: "05.01.2021", dueDate: "18.02.2021", dueValue: "50 RON"},
    {billName: "intretinere", dateOfIssue: "13.12.2020", dueDate: "30.12.2020", dueValue: "76 RON"},
    {billName: "curent", dateOfIssue: "09.10.2020", dueDate: "23.10.2020", dueValue: "150 RON"},
];



const UnpaidBillsTable = () => {
    let history = useHistory();
    // if(match.params.firstName != null)
    //     userData.push({firstName: match.params.firstName, lastName: match.params.lastName, email: match.params.email, phoneNumber: match.params.phoneNumber, address: match.params.address})
    // React.useEffect(() => {
    //     userData.pop();
    // })
    return (
        <div className = "table-wrapper">
            <div className = "table-background">
                <table>
                    <tr>
                        <th>Bill Name</th>
                        <th>Date of issue</th>
                        <th>Due Date</th>
                        <th>Due Value</th>
                        <th></th>
                    </tr>
                    {unpaidBillsData.map(info => {
                        return (
                            <tr>
                                <td>{info.billName}</td>
                                <td>{info.dateOfIssue}</td>
                                <td>{info.dueDate}</td>
                                <td>{info.dueValue}</td>
                                <td><button>Pay now!</button></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}

export default UnpaidBillsTable;