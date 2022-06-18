import React from "react";
import "./welcomepage.css";

import { Header } from "../../Components";
import { useState } from "react";
import tomato from "../../Assets/tomato.png";
import bread from "../../Assets/bread.png";
import lettuce from "../../Assets/lettuce.png";

const Welcomepage = () => {
  const [registering, setRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  

background: #DEFF97;

  <style>
     .rectangle {
        width: 1448.04px;
        height: 465px;
        left: -5.03px;
        top: -39.5px;

background: #DEFF97;
}
  return (
    <div className="welcome_container">
      <div>
        <Header />
      </div>

      <div className="login_register_container">
        {registering ? (
          <div className="register_container">
            Registering
            <input
              type="username"
              placeholder="Username"
              onChange={(e) => setRegisterInfo.username(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setRegisterInfo.email(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setRegisterInfo.password(e.target.value)}
            />
            <button onClick={() => console.log("Submit")}>Submit</button>
            <button onClick={() => setRegistering(false)}>Back</button>
          </div>
        ) : (
          <div className="login_container">
            Login
            <input
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
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
