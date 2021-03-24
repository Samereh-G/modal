import React, { useState } from "react";
import { request } from "../config/api";
import "./Modal.css";

export default function Modal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = (event) => {
    // always add this line too prevent reloading after submition.
    event.preventDefault();

    const data = {
      email,
      password,
    };

    request("/profiles", "POST", data).then(([status, json]) => {
      console.log("status", status);
    });

    // fetch("http://localhost:5000/profiles", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     return { status: response.status, responseJson: response.json() };
    //   })
    //   .then(({ status, responseJson }) => {
    //     if (status === 201) {
    //       console.log(" user created successfully");
    //       onClose();
    //     }
    //   });

    // send the request to api
  };

  return (
    <div className="modal">
      <div className="modal__paper">
        <div onClick={onClose} className="modal__closebtn">
          X
        </div>
        <h2>Add user</h2>
        <hr />
        <form onSubmit={handleSubmitForm}>
          <div className="modal__inputcat">
            <label>Email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              type="email"
              name="email"
            />
          </div>
          <div className="modal__inputcat">
            <label>Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              type="password"
              name="password"
            />
          </div>
          <div className="modal__inputcat">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
