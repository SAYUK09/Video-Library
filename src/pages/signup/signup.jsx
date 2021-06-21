import "./signup.css";
import axios from "axios";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(name, email, password);

  async function signupHandler() {
    try {
      console.log("try");
      const response = await axios.post(
        "https://vid-lib-api-forked.sayuk.repl.co/register/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );

      console.log("30");

      if (!response.data.User) {
        setError(response.data);
      } else {
        navigate(state?.from ? state.from : "/");
      }
    } catch (err) {
      console.log(err, "lllll");
      setError("something went wrong", err);
    }
  }

  return (
    <div className="sigupParent">
      <div className="sigupBody">
        <h1>signup</h1>
        <input
          className="inputBox"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="Email"
          className="inputBox"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="inputBox"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="btnPrimary" onClick={signupHandler}>
          Sign Up
        </button>

        {error && (
          <p className="errorMessage" style={{ color: "red" }}>
            {error}
          </p>
        )}

        <p>
          Already have an account, <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
