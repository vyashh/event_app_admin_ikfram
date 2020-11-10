import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import "./sidebar_styles.css";

const Side = (props) => {
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <Nav.Item>
            <Nav.Link className="active" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Users</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Events</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
};
const SideBar = withRouter(Side);
export default SideBar;
