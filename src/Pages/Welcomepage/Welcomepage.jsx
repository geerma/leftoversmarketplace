import React from "react";
import "./welcomepage.css";

import { Header } from "../../Components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcomepage = () => {
  const backend_URL = "https://leftoverbackend.herokuapp.com";

  const navigate = useNavigate();
  const [registering, setRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerInfo, setRegisterInfo] = useState({
    usernameregister: "",
    emailregister: "",
    passwordregister: "",
  });

  const handleRegisterSubmit = () => {
    console.log(registerInfo.usernameregister);

    fetch(`${backend_URL}/api/users/register`, {
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

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(`${backend_URL}/api/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    console.log(data);

    if (data.token) {
      alert("Logged In");
      navigate("/homepage");
    } else {
      alert("Please check login credidentials");
    }
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
              type="emaikl-login"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password-login"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={(e) => handleLogin(e)}>Login</button>
            <button onClick={() => setRegistering(true)}>Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcomepage;
