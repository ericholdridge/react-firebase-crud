import React from "react";

const ContactForm = ({
  values,
  handleInputChange,
  handleFormSubmit,
}) => {
  return (
    <div className="contactForm w-full max-w-xl">
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
        <label htmlFor="">Mobile</label>
        <input
          className="border-2 border-black rounded"
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={values.mobile}
          onChange={handleInputChange}
        />
        <label htmlFor="">Email</label>
        <input
          className="border-2 border-black rounded"
          type="text"
          placeholder="Email Address"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
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
