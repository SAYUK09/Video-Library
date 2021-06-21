import "./Logout.css";
import React from "react";
import { useAuth } from "../../contexts/authContext";

export const Logout = () => {
  const { auth, setAuth } = useAuth();

  function logoutHandler() {
    setAuth(() => {
      localStorage.removeItem("auth");
    });
  }

  return (
    <div className="loginParent">
      <div className="loginBody">
        <h1>See you back soon!</h1>

        <button className="btnPrimary" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};
