import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserItemAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      isTeamleider: "",
    };
  }

  nameHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    // updateEvent = () => {};

    const updateIsTeamleader = () => {
      this.setState({
        isTeamleader: !this.state.isTeamleader,
      });
    };

    console.log(this.props.isTeamleader);
    return (
      <>
        <th scope="row">
          <input
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.nameHandler}
          />
        </th>
        <td>{this.props.id}</td>
        <td>{this.props.email}</td>
        <td>
          <input type="text" value={this.props.phone} />
        </td>
        <td>
          <div class="custom-control custom-checkbox custom-control-inline">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultInline1"
              checked={this.state.isTeamleider}
              onClick={updateIsTeamleader}
            />
            <label class="custom-control-label" for="defaultInline1"></label>
          </div>
        </td>
        <td>
          <button className="btn btn-success" onClick={this.toggleIsEdit}>
            Update
          </button>
          <Link to="/">
            <button className="btn btn-primary">Cancel</button>
          </Link>
        </td>
      </>
    );
  }
}
