import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function ListContacts() {
  const [phonebook, setPhonebook] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/all-phones").then((response) => {
      setPhonebook(response.data.data.phoneNumbers);
    });
  }, []);

  const deletePhone = (id) => {
    Axios.delete(`http://localhost:8080/api/delete-phone/${id}`)
  }

  return (
    <div className="container">

      <h1 className="display-2">PhoneBook List</h1>
      {
        phonebook.map(eachPhone => {
          return (

            <div className="card mb-3" key={eachPhone._id}>
              <div className="card-header d-flex flex-row justify-content-around">
                <h3 className="card-title display-5">{eachPhone.name}</h3>
                <Link to={`/update-cotact/${eachPhone._id}`} className="btn btn-warning">
                  <input type="button" value="Editar" className="btn btn-warning" />
                </Link>
                <input type="button" value="Eliminar" className="btn btn-danger" onClick={() => {deletePhone(eachPhone._id)}}/>
              </div>
              <div className="card-body">
                <p className="card-text">{eachPhone.phone}</p>
              </div>
            </div>
        );
      })
      }
      <hr />
      <Link to="/">
        <button className="btn btn-outline-secondary">Ir a Home</button>
      </Link>
      <hr />
    </div>
  );
}

export default ListContacts;