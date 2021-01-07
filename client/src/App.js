import './App.css';
import AnnouncementPage from './components/announcement/AnnouncementPage'
import DecisionsPageOwner from './components/decisions/DecisionsPageOwner'
import DecisionsPageAdmin from './components/decisions/DecisionsPageAdmin'
import AddNewDecisionPage from './components/decisions/AddNewDecisionPage'
import NavbarGuest from './components/navbar/NavbarGuest'
import NavbarOwner from './components/navbar/NavbarOwner';
import NavbarAdmin from './components/navbar/NavbarAdmin';
import Message from './components/messages/Message'

function App() {
  return (
    <div>
      <NavbarGuest />
      <NavbarOwner />
      <NavbarAdmin />
      <DecisionsPageOwner />
      <DecisionsPageAdmin />
      <AddNewDecisionPage />
      <Message message="Transaction Successful"/>
    </div>
  );
}

export default App;
