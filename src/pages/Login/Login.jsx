import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const { state } = useLocation();

  async function loginHandler() {
    try {
      const response = await axios.post(
        "https://vid-lib-api-forked.sayuk.repl.co/register/login",
        {
          email: email,
          password: password,
        }
      );

      console.log(response.data);

      if (!response.data.token) {
        setError(response.data);
      } else {
        setAuth(response.data);
        setAuth((prev) => {
          localStorage.setItem("auth", JSON.stringify(prev));
          return prev;
        });

        navigate(state?.from ? state.from : "/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="loginParent">
      <div className="loginBody">
        <h1>Login</h1>

        <input
          className="inputBox"
          placeholder="Email"
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

        <button className="btnPrimary" onClick={loginHandler}>
          Login
        </button>

        {error && (
          <p className="errorMessage" style={{ color: "red" }}>
            {error}
          </p>
        )}

        <p>
          Don't have an accout, <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
