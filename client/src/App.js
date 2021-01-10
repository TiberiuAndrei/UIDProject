import './App.css';
import AnnouncementPage from './components/announcement/AnnouncementPage'
import UserTable from './components/user/UserTable'
import CreateUserForm from './components/user/CreateUserForm'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react'

function App() {
  return (
    //<AnnouncementPage />
    <BrowserRouter>
      <Switch>
        <Route path = "/createUser" component = {CreateUserForm}/>
        <Route path = "/users/:firstName/:lastName/:email/:phoneNumber/:address" component = {UserTable}/>
        <Route path = "/users" component = {UserTable}/>
        <Route exact strict path = "/" component = {AnnouncementPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
