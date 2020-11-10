import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import EventItem from "../../event/event_component";

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
      <div className="row title-bar">
        <h1 className="col-11">Events</h1>
        <button className="btn btn-primary">+</button>
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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {events.map((event) => (
          <EventItem {...event} />
        ))}
      </table>
      {/* <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
}
