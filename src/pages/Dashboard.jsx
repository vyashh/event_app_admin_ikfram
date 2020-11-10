import React, { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavBar from "../components/navbar/navbar_component";
import Sidebar from "../components/sidebar/sidebar_component";
import Home from "../components/dashboard/home/home_component";
import Users from "../components/dashboard/users/users_component";
import Events from "../components/dashboard/events/events_component";

export default function Dashboard() {
  const history = useHistory();
  const [component, setComponent] = useState(<Home />);
  const [activeTab, setActiveTab] = useState(0);

  function switchComponent(toSwitchComponent) {
    console.log(toSwitchComponent);
    switch (toSwitchComponent) {
      case "Dashboard":
        setComponent(<Home />);
        setActiveTab(0);
        break;
      case "Users":
        setComponent(<Users />);
        setActiveTab(1);

        break;
      case "Events":
        setComponent(<Events />);
        setActiveTab(2);
        break;
    }
  }

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-white sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active text-dark"
                    onClick={() => switchComponent("Dashboard")}
                  >
                    <span
                      className={
                        activeTab === 0
                          ? "font-weight-bold border-bottom border-primary"
                          : ""
                      }
                    >
                      Dashboard
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => switchComponent("Users")}
                  >
                    <span
                      className={
                        activeTab === 1
                          ? "font-weight-bold border-bottom border-info"
                          : ""
                      }
                    >
                      Users
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => switchComponent("Events")}
                  >
                    <span
                      className={
                        activeTab === 2
                          ? "font-weight-bold border-bottom border-success"
                          : ""
                      }
                    >
                      Events
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main
            role="main"
            className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 "
          >
            {component}
          </main>
        </div>
      </div>
    </>
  );
}
