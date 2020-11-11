import React from "react";
import NavBar from "../components/navbar/navbar_component";
import SideBar from "../components/sidebar/sidebar_component";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <SideBar activeNav="0">
        <h1>Dashboard</h1>
      </SideBar>
    </>
  );
}
