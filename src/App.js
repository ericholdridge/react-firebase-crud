import React, { useState, useEffect } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Heading from "./components/Heading";
import firebaseDB from "./firebase";

function App() {
  const initialFormValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  const [values, setValues] = useState(initialFormValues);
  const [contactObjects, setContactObjects] = useState({});

  // Get the users input values
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Prevent the form from refreshing
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };

  const addOrEdit = (obj) => {
    firebaseDB.child("contacts").push(obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log(obj);
  };

  useEffect(() => {
    firebaseDB.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setContactObjects({
          ...snapshot.val(),
        });
    });
  }, []);

  return (
    <div className="App">
      <Heading />
      <Contacts
        values={values}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        addOrEdit={addOrEdit}
        contactObjects={contactObjects}
      />
    </div>
  );
}

export default App;
