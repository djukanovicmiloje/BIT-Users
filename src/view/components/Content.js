import React from "react";
import User from "../../entities/user";
import UserCard from "./UserCard";
import getUsers from "../../services/getUsers";
import { getSearchedUsers, getAllUsers } from "../../services/getSearchedUsers";
import storeContentState from "../../services/storePage";
import getStoredState from "../../services/getStoredState";
import getUsersFromStorage from "../../services/getUsersFromStorage";
import About from "./About";

import "./Content.css";

const placeHolder = new User(
  "pera peric",
  "perperic@gmail.com",
  "1.1.1111",
  "male",
  "https://via.placeholder.com/150"
);

const placeHolderUsers = new Array(20).fill(placeHolder);

class Content extends React.Component {
  constructor() {
    super();
    /*     const storedState = getStoredState();
    if (storedState) {
      this.state = storedState;
    } else {
      this.state = {
        layout: "grid",
        users: placeHolderUsers,
        about: false
      }; */
    this.state = {
      users: getUsersFromStorage(),
      layout: "grid",
      about: false
    };
    console.log(getUsersFromStorage());
    async function addUsers() {
      const users = await getUsers();
      this.state.users = users;
      this.setState(this.state);
    }
    const addUsersHandler = addUsers.bind(this);
    /* addUsersHandler(); */
  }
  render() {
    storeContentState(this.state);

    const layout = this.state.layout;
    console.log(this.state.about);
    if (this.state.about) {
      return (
        <>
          <button className="btn" id="home" onClick={() => this.onHomeClick()}>
            Home
          </button>
          <About />
        </>
      );
    }
    return (
      <div id="content">
        <input
          onClick={() => this.onSearchClick()}
          onKeyUp={event => this.onSearchKeyUp(event)}
          id="search"
          type="text"
          placeholder="Search users"
        ></input>
        <button className="btn" id="about" onClick={() => this.onAboutClick()}>
          About
        </button>
        <button className="btn" id="grid" onClick={() => this.onGridClick()}>
          <i className="fas fa-grip-horizontal"></i>
        </button>
        <button className="btn" id="list" onClick={() => this.onListClick()}>
          <i className="fas fa-list"></i>
        </button>
        <button
          className="btn"
          id="reload"
          onClick={() => this.onReloadClick()}
        >
          <i className="fas fa-redo"></i>
        </button>
        {this.state.users.map((user, key) => {
          return <UserCard key={key} user={user} layout={layout} />;
        })}
      </div>
    );
  }
  onGridClick() {
    this.state.layout = "grid";
    this.setState(this.state);
    localStorage.setItem("layout", "grid");
  }
  onListClick() {
    this.state.layout = "list";
    this.setState(this.state);
    localStorage.setItem("layout", "list");
  }
  async onReloadClick() {
    this.state.users = await getUsers();
    this.setState(this.state);
  }
  async onSearchKeyUp(event) {
    const searchValue = event.target.value;
    console.log(searchValue);
    const newUsers = await getSearchedUsers(searchValue);
    this.state.users = newUsers;
    this.setState(this.state);
  }
  onAboutClick() {
    this.state.about = true;
    this.setState(this.state);
  }
  onHomeClick() {
    this.state.about = false;
    this.setState(this.state);
  }
  onSearchClick() {
    getAllUsers();
  }
}

export default Content;
