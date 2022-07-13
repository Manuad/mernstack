import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

//Component to update a contact
function UpdateContactComponent() {

  const [newPhone, setNewPhone] = useState(0);

  const clearForm = () => {
    const inputs = document.querySelectorAll('input');
    inputs.values = '';
  }

  const updatePhone = (id) => {
    Axios.put('http://localhost:8080/api/update-phone',{id, newPhone})
    .then(() => {
      clearForm();
    });
  }

  return (
    <main className="container p-5">
        {
        newPhone.map((val,key) => {
          return <div key={key} className="phone" >
            <h1>{val.name}</h1>
            <h1>{val.phone}</h1>
            <input type="number" placeholder='update Phone...' onChange={(e) => {
              setNewPhone(e.target.value)
            }}/>
            <button className="update-btn"  onClick={() => {updatePhone(val._id)}}>Update</button>
          </div>
        })
      }

    </main>
  );
}

export default UpdateContactComponent;