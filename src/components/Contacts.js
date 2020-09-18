import React from "react";
import ContactForm from "./ContactForm";

const Contacts = ({
  values,
  handleInputChange,
  handleFormSubmit,
  addOrEdit,
  contactObjects,
}) => {
  return (
    <div className="contacts w-full">
      <div className="container mx-auto py-4 flex justify-between">
        <ContactForm
          values={values}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          addOrEdit={addOrEdit}
        />
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(contactObjects).map((id) => {
              return (
                <tr className="flex justify-between border-2" key={id}>
                  <td>{contactObjects[id].fullName}</td>
                  <td>{contactObjects[id].email}</td>
                  <td>{contactObjects[id].mobile}</td>
                  <td>{contactObjects[id].address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
