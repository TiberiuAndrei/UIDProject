import * as React from 'react';
import NavbarAdmin from '../navbar/NavbarAdmin'
import NavbarOwner from '../navbar/NavbarOwner'
import UserTable from './UserTable';

const UsersPage = (props) => {
  return (
    <div>
      {props.match.params.user === "admin" ? <NavbarAdmin /> : <NavbarOwner />}

      <UserTable />
    </div>

  )
}


export default UsersPage;