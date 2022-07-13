//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from 'react-router-dom'
import CreateContact from "./components/CreateContact";
import HomeComponent from "./components/HomeComponent";
import ListContacts from "./components/ListContacts";
import UpdateContactComponent from "./components/UpdateContactComponent";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/new-contact" element={<CreateContact />} />
        <Route path="/all-contacts" element={<ListContacts/>} />
        <Route path="/update-contact" element={<UpdateContactComponent/>}></Route>
      </Routes>
    </>
  );
}

export default App;
