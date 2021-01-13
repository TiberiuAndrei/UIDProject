import './App.css';
import Login from "./components/login/Login";
import LeaveComplaint from "./components/leavecomplaint/LeaveComplaint";
import UnpaidBills from "./components/tables/PaidBills";
import AskAnything from "./components/askanything/AskAnything";
import RequestSentMessage from "./components/messages/request/RequesSent";
import ComplaintSentMessage from "./components/messages/complaint/ComplaintSent";
import InsufficientFundsMessage from "./components/messages/insuficientfunds/InsuficientFunds";
import Transaction from "./components/messages/transaction/Transaction";
import WelcomePage from "./components/welcome/WelcomePage";
import UnpaidBillsTable from "./components/tables/UnpaidBillsAdmin";
import PaidBillsTable from "./components/tables/PaidBills";
import UnpaidBillsUser from "./components/tables/UnpaidBillsUser";
import MapPage from "./components/map/Map";
import PayBill from "./components/paybill/PayBill";
import AskaAnythingPage from "./components/askanything/AskaAnythingPage";
import AskAnythingPageUser from "./components/askanything/AskAnythingPageUser";
import LeaveComplaintPageUser from "./components/leavecomplaint/LeaveComplaintPageUser";
import LeaveComplaintPageOwner from "./components/leavecomplaint/LeaveComplaintPageOwner";
import ComlaintMessPageOwner from "./components/messages/complaint/ComplaintMessPageGuest";
import ComplaintMessPageGuest from "./components/messages/complaint/ComplaintMessPageGuest";
import ComplaintMessPageUser from "./components/messages/complaint/ComplaintMessPageUser";
import InsufficientFundsMess from "./components/messages/insuficientfunds/InsufficientFundsMess";
import TransactionMessPage from "./components/messages/transaction/TransactionPage";
import RequestMessOwner from "./components/messages/request/RequestSentOwner";
import RequestMessGuest from "./components/messages/request/RequestSentGuest";
import PayBillPage from "./components/paybill/PayBillPage";
import UserBillsPage from "./components/tables/UserBillsPage";

function App() {
  return (
    <PayBillPage />
  );
}

export default App;
