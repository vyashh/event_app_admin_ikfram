import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../providers/AuthProvider";

import NavBar from "../components/navbar/navbar_component";
import SideBar from "../components/sidebar/sidebar_component";
import OrganisationAdd from "../components/organisation_add/organisation_add.component";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection("users")
        .doc("prdvRniEhtdJgL9C8pkSgs7irh13")
        .get()
        .then((snapshot) => {
          console.log(snapshot.data().organisation);
        });
      // setUserData(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <SideBar activeNav="0">
        <div className="h-100 row align-items-center text-center">
          <div className="col">{currentUser.email}</div>
        </div>
      </SideBar>
    </>
  );
}
