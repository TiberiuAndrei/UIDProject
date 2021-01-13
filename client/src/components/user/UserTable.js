import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/user/UserTable.css';
import NavbarAdmin from '../navbar/NavbarAdmin';

let userData = [{ firstName: "Ana", lastName: "Popescu", email: "anapopescu@gmail.com", phoneNumber: "0701010101", address: "Str Strada, Bl BLoc, Sc Scara, Ap 1" },
{ firstName: "Ion", lastName: "Popescu", email: "ionpopescu@gmail.com", phoneNumber: "0799999999", address: "Str Alta Strada, Bl Alt BLoc, Sc Alta Scara, Ap 5" },
{ firstName: "Ana", lastName: "Popescu", email: "anapopescu@gmail.com", phoneNumber: "0701010101", address: "Str Strada, Bl BLoc, Sc Scara, Ap 1" },
{ firstName: "Ion", lastName: "Popescu", email: "ionpopescu@gmail.com", phoneNumber: "0799999999", address: "Str Alta Strada, Bl Alt BLoc, Sc Alta Scara, Ap 5" },
{ firstName: "Ana", lastName: "Popescu", email: "anapopescu@gmail.com", phoneNumber: "0701010101", address: "Str Strada, Bl BLoc, Sc Scara, Ap 1" },
{ firstName: "Ion", lastName: "Popescu", email: "ionpopescu@gmail.com", phoneNumber: "0799999999", address: "Str Alta Strada, Bl Alt BLoc, Sc Alta Scara, Ap 5" },
{ firstName: "Ana", lastName: "Popescu", email: "anapopescu@gmail.com", phoneNumber: "0701010101", address: "Str Strada, Bl BLoc, Sc Scara, Ap 1" },
{ firstName: "Ion", lastName: "Popescu", email: "ionpopescu@gmail.com", phoneNumber: "0799999999", address: "Str Alta Strada, Bl Alt BLoc, Sc Alta Scara, Ap 5" }
];


function createUser(history) {
    console.log("function which pushes to hostory was called");
    history.push('/admin/users/createUser');
}

const UserTable = ({ match }) => {
    let history = useHistory();
    const [count, setCount] = React.useState(0);
    if (match.params.firstName != null) {
        userData.push({ firstName: match.params.firstName, lastName: match.params.lastName, email: match.params.email, phoneNumber: match.params.phoneNumber, address: match.params.address })
    }
    return (
        <div>
            <NavbarAdmin />
            <div className="table-wrapper">
                <div className="table-background">
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                        {userData.map(info => {
                            return (
                                <tr>
                                    <td>{info.firstName}</td>
                                    <td>{info.lastName}</td>
                                    <td>{info.email}</td>
                                    <td>{info.phoneNumber}</td>
                                    <td>{info.address}</td>
                                    <td><button>Unpaid Bills and Transctions History</button></td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
                <button className="add-user-button" onClick={e => createUser(history)}>Create new user</button>
            </div>
        </div>
    );
}

export default UserTable;