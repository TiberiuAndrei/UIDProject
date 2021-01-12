import './App.css';
import UserTable from './components/user/UserTable'
import CreateUserForm from './components/user/CreateUserForm'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import WelcomePage from './components/WelcomePage'
import Login from './components/Login'
import AnnouncementPage from './components/announcement/AnnouncementPage'
import MeetingsPage from './components/meetings/MeetingsPage'
import AddNewMeetingPage from './components/meetings/AddNewMeetingPage'
import Meeting from './components/meetings/Meeting'
import Complaint from './components/complaints/Complaint';
import ComplaintPage from './components/complaints/ComplaintPage';

const data = [
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Parking slot",
    content: "Someone parked on my parking slot and didn't leave a phone number",
    solved: false
  }
]

function App() {
  return (
    <ComplaintPage />
    // <Complaint data={data[1]}/>

    // <Meeting data={data[0]}/>
    // <MeetingsPage />
    // <AddNewMeetingPage />
  
  
    // <BrowserRouter>
    //   <Switch>
    //   <Route path = "/welcomepage/:email" component={WelcomePage}/>
    //   <Route path = "/" component = {Login}/>
    //   </Switch>
    // </BrowserRouter>



/*<Route path = "/createUser" component = {CreateUserForm}/>
        <Route path = "/users/:firstName/:lastName/:email/:phoneNumber/:address" component = {UserTable}/>
        <Route path = "/users" component = {UserTable}/>
        <Route exact strict path = "/" component = {AnnouncementPage}/>*/
  );
}

export default App;
