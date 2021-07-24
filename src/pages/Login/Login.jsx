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
import { LoginComponent } from "../../components/Login/Login";
import { Logout } from "../../components/Logout/Logout";

export function Login() {
  const { auth, setAuth } = useAuth();
  return <>{auth ? <Logout /> : <LoginComponent />}</>;
}
