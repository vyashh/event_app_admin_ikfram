import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/navbar_component";
import SideBar from "../components/sidebar/sidebar_component";
import UserItem from "../components/user/user_item_component";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("users").get();
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <SideBar activeNav="1">
        <div className="row title-bar">
          <h1 className="col-11">Users</h1>
        </div>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Naam</th>
              <th scope="col">UID</th>
              <th scope="col">Email</th>
              <th scope="col">Telefoonnummer</th>
              <th scope="col">isTeamleider</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {users.map((user) => (
            <UserItem key={user} {...user} />
          ))}
        </table>
      </SideBar>
    </>
  );
}
