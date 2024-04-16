import React, { useState } from "react";
import "./LeaveUsAText.css"; // Import your CSS file

const LeaveUsAText = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your logic to handle the submitted data, like sending it to a server or storing it in state.
    console.log("Submitted data:", formData);
    // Optionally, you can clear the input fields after submission.
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="leave-us">
      <h2>Leave us a message</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div>
            <div className="form-group">
              <label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </label>
            </div>
          </div>
          <div>
            <div className="form-group">
              <label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="text-area">
          <label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              rows={5}
              cols={50}
            />
          </label>
        </div>

        <div className="form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LeaveUsAText;
