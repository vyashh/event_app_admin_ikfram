import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/navbar_component";
import SideBar from "../../components/sidebar/sidebar_component";
import EventItem from "../../components/event/event_item/event_item_component";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("events").get();
      setEvents(data.docs.map((doc) => doc.data()));
    };
    fetchData();
    console.log(events);
  }, []);

  return (
    <>
      <NavBar />
      <SideBar activeNav="2">
        <div className="row title-bar">
          <h1 className="col-11">Events</h1>
          <Link to="/event/add">
            <button className="btn btn-primary">+</button>
          </Link>
        </div>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Naam</th>
              <th scope="col">EventId</th>
              <th scope="col">Datum</th>
              <th scope="col">Locatie</th>
              <th scope="col">Teamleider</th>
              <th scope="col">Verwachte mensen</th>
              <th scope="col">Deelnemers</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {events.map((event) => (
            <EventItem {...event} />
          ))}
        </table>
      </SideBar>
    </>
  );
}
