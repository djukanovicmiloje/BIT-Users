import React from "react";
import "./UserCard.css";
class UserCard extends React.Component {
  constructor({ user, layout }) {
    super();

    this.state = {
      name: user.name,
      image: user.image,
      email: user.email,
      birthdate: user.birthdate,
      gender: user.gender,
      layout: layout
    };
  }
  componentWillReceiveProps({ user, layout }) {
    this.setState({
      name: user.name,
      image: user.image,
      email: user.email,
      birthdate: user.birthdate,
      gender: user.gender,
      layout: layout
    });
  }
  render() {
    let userCardClass;
    if (this.state.layout === "grid") {
      userCardClass = "userCard userCard_grid";
    } else {
      userCardClass = "userCard userCard_list";
    }
    if (this.state.gender === "female") {
      userCardClass += " female";
    }
    return (
      <div className={userCardClass}>
        <img src={this.state.image} alt=""></img>
        <div>
          <p>{this.state.name}</p>
          <p>
            <i className="fas fa-envelope-square"></i> {this.state.email}
          </p>
          <p>
            <i className="fas fa-birthday-cake"></i>
            {this.state.birthdate}
          </p>
        </div>
      </div>
    );
  }
}
export default UserCard;
