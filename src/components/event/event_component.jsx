import React, { Component } from "react";
import "./event_styles.css";

export default class EventItem extends Component {
  render() {
    return (
      <>
        <tbody>
          <tr>
            <td scope="row">{this.props.name}</td>
            <td>{this.props.id}</td>
            <td>{this.dateTime}</td>
            <td>Ziggo Dome Ingang D</td>
            <td>{this.props.teamleader}</td>
            <td>50</td>
            <td>{this.props.attendees}</td>
            <td>
              <button className="btn btn-warning">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </>
    );
  }
}
