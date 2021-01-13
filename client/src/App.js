import './App.css';
import CreateUserForm from './components/user/CreateUserForm'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import WelcomePage from './components/welcome/WelcomePage'
import WelcomePageGuest from './components/welcome/WelcomePageGuest'
import Login from './components/login/Login'
import AnnouncementPage from './components/announcement/AnnouncementPage'
import MeetingsPage from './components/meetings/MeetingsPage'
import AddNewMeetingPage from './components/meetings/AddNewMeetingPage'
import Meeting from './components/meetings/Meeting'
import ComplaintPage from './components/complaints/ComplaintPage';
import DecisionsPageAdmin from './components/decisions/DecisionsPageAdmin';
import DecisionsPageOwner from './components/decisions/DecisionsPageOwner';
import AddNewDecisionPage from './components/decisions/AddNewDecisionPage';
import UserBillsPage from './components/tables/UserBillsPage';
import PayBillPage from './components/paybill/PayBillPage';
import AskAnythingPageUser from './components/askanything/AskAnythingPageUser';
import RequestSentOwner from './components/messages/request/RequestSentOwner';
import LeaveComplaintPageUser from './components/leavecomplaint/LeaveComplaintPageUser'
import ComplaintMessPageUser from './components/messages/complaint/ComplaintMessPageUser'
import TransactionPage from './components/messages/transaction/TransactionPage'
import MapPage from './components/map/MapPage'
import UserTable from './components/user/UserTable'
import CreateUsersForm from './components/user/CreateUserForm'
import UsersPage from './components/user/UsersPage';

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
    // <ComplaintPage />
    // <Complaint data={data[1]}/>

    // <Meeting data={data[0]}/>
    // <MeetingsPage />
    // <AddNewMeetingPage />


    <BrowserRouter>
      <Switch>

        <Route path="/admin/users/:firstName/:lastName/:email/:phoneNumber/:address" component={UserTable} />
        <Route path="/admin/users/createUser" component={CreateUsersForm} />
        <Route path="/admin/users" component={UserTable} />
        <Route path="/guest/resources" component={MapPage} />
        <Route path="/guest" component={WelcomePageGuest} />
        <Route path="/admin/decisions/addNewDecision" component={AddNewDecisionPage} />
        <Route path="/owner/taxes/payBill" component={PayBillPage} />
        <Route path="/owner/taxes/transactionFailed" component={TransactionPage} />
        <Route path="/owner/taxes" component={UserBillsPage} />
        <Route path="/owner/help" component={AskAnythingPageUser} />
        <Route path="/owner/complaintSent" component={ComplaintMessPageUser} />
        <Route path="/owner/leaveComplaint" component={LeaveComplaintPageUser} />
        <Route path="/owner/message/questionSent" component={RequestSentOwner} />
        <Route path="/admin/decisions" component={DecisionsPageAdmin} />
        <Route path="/owner/decisions" component={DecisionsPageOwner} />
        <Route path="/:user/complaints" component={ComplaintPage} />
        <Route path="/:user/meetings/newMeeting" component={AddNewMeetingPage} />
        <Route path="/:user/meetings/meetingDetails" component={Meeting} />
        <Route path="/:user/meetings" component={MeetingsPage} />
        <Route path="/:user/announcements" component={AnnouncementPage} />
        <Route path="/:user" component={WelcomePage} />
        <Route path="/:user/complaints" component={ComplaintPage} />

        <Route path="/" component={Login} />

      </Switch>
    </BrowserRouter>



    /*<Route path = "/createUser" component = {CreateUserForm}/>
            <Route path = "/users/:firstName/:lastName/:email/:phoneNumber/:address" component = {UserTable}/>
            <Route path = "/users" component = {UserTable}/>
            <Route exact strict path = "/" component = {AnnouncementPage}/>*/
  );
}

export default App;
