import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function CreateContact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);

  const addNewNumber = () => {
    Axios.post('http://localhost:8080/api/add-phone',{name,phone})
  };

  return (
    <main className="container p-5">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Name</span>
          </div>
          <input className="form-control" type="text" onChange={(e) => {setName(e.target.value)}} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Phone</span>
          </div>
          <input className="form-control" type="number" onChange={(e) => {setPhone(e.target.value)}}/>
        </div>
        <div className="d-flex flex-row">
          <div className="p-1">
            <button className="btn btn-success" onClick={addNewNumber}>Add New Number</button>
          </div>
          <div className="p-1">
            <Link to="/" className="btn btn-outline-secondary ml-auto">Ir a Home</Link>
          </div>
        </div>

    </main>
  );
}

export default CreateContact;
