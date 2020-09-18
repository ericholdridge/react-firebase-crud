import React from "react";

const ContactForm = ({ values, handleInputChange, handleFormSubmit }) => {
  return (
    <div className="contactForm w-1/3">
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <label htmlFor="">Full Name</label>
        <input
          className="border-2 border-black rounded"
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
        <div className="w-full flex justify-between">
          <div className="flex flex-col w-64">
            <label htmlFor="">Mobile</label>
            <input
              className="border-2 border-black rounded"
              type="text"
              placeholder="Mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-64">
            <label htmlFor="">Email</label>
            <input
              className="border-2 border-black rounded"
              type="text"
              placeholder="Email Address"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <label htmlFor="">Address</label>
        <input
          className="border-2 border-black rounded"
          type="text"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
