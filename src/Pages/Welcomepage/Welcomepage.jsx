import React from "react";
import "./welcomepage.css";

import { Header } from "../../Components";
import { useState } from "react";

const Welcomepage = () => {
  const register_URL =
    "https://leftoverbackend.herokuapp.com/api/users/register";

  const [registering, setRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerInfo, setRegisterInfo] = useState({
    usernameregister: "",
    emailregister: "",
    passwordregister: "",
  });

  const handleRegisterSubmit = () => {
    console.log(registerInfo.usernameregister)

    fetch(`${register_URL}`, {
      method: "POST",
      body: JSON.stringify({
        username: registerInfo.usernameregister,
        email: registerInfo.emailregister,
        password: registerInfo.passwordregister,
        firstName: "first",
        lastname: "last",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="welcome_container">
      <div>
        <Header />
      </div>

      <div className="login_register_container">
        {registering ? (
          <div className="register_container">
            Registration
            <input
              type="username-register"
              placeholder="Username"
              onChange={(e) =>
                setRegisterInfo((prevState) => ({
                  ...prevState,
                  usernameregister: e.target.value,
                }))
              }
            />
            <input
              type="email-register"
              placeholder="Email"
              onChange={(e) =>
                setRegisterInfo((prevState) => ({
                  ...prevState,
                  emailregister: e.target.value,
                }))
              }
            />
            <input
              type="password-register"
              placeholder="Password"
              onChange={(e) =>
                setRegisterInfo((prevState) => ({
                  ...prevState,
                  passwordregister: e.target.value,
                }))
              }
            />
            <button onClick={() => handleRegisterSubmit()}>Submit</button>
            <button onClick={() => setRegistering(false)}>Back</button>
          </div>
        ) : (
          <div className="login_container">
            Login
            <input
              type="username-login"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password-login"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => console.log("Log In")}>Login</button>
            <button onClick={() => setRegistering(true)}>Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcomepage;
