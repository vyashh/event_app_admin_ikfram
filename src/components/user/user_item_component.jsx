import React, { Component } from "react";
import UserAddItem from "./user_item_add_component";

export default class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
    };
  }

  toggleIsEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  };

  render() {
    return (
      <>
        <tbody>
          <tr>
            {this.state.isEdit ? (
              <UserAddItem {...this.props} />
            ) : (
              <>
                <th scope="row">{this.props.name}</th>
                <td>{this.props.id}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.isTeamleader ? "Ja" : "Nee"}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={this.toggleIsEdit}
                  >
                    Edit
                  </button>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </>
    );
  }
}
