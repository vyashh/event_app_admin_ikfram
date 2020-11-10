import React, { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import "./navbar_styles.css";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();
  const [error, setError] = useState();
  const { logout } = useAuth();

  async function handleSubmit() {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <nav className="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0 border-bottom">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0 font-weight-bold text-dark"
          href="/"
        >
          Epp Admin Panel
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link text-dark" onClick={handleSubmit}>
              Uitloggen
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
