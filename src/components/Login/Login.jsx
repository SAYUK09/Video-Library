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
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

export const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [displayLoader, setDisplayLoader] = useState(false);
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const { state } = useLocation();

  async function loginHandler() {
    try {
      setDisplayLoader(true);
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
        setDisplayLoader(false);
      } else {
        console.log("khatna");

        setAuth(response.data);
        setAuth((prev) => {
          localStorage.setItem("auth", JSON.stringify(prev));
          return prev;
        });
        toast("Logged in Successfully", {
          type: "success",
        });
        navigate(state?.from ? state.from : "/");
        setDisplayLoader(false);
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
          type="email"
          className="inputBox"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="inputBox"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Loader
          visible={displayLoader}
          type="TailSpin"
          color="#3b82f6"
          height={60}
          width={60}
        />

        <button type="submit" className="btnPrimary" onClick={loginHandler}>
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
};
