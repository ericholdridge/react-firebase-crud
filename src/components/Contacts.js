import React from "react";
import ContactForm from "./ContactForm";

const Contacts = ({ values, handleInputChange, handleFormSubmit, addOrEdit }) => {
  return (
    <div className="contacts w-full">
      <div className="container mx-auto py-4 flex justify-between">
        <ContactForm
          values={values}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          addOrEdit={addOrEdit}
        />
        <div className="listOfContacts w-full max-w-xl border-2">
          <h1>List of contacts</h1>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
