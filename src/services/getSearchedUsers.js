import fetchAllUsers from "./fetchAll";
import User from "../entities/user";

let userList;

export async function getAllUsers() {
  const usersData = await fetchAllUsers();
  const users = [];
  usersData.forEach(userData => {
    const name = `${userData.name.first} ${userData.name.last}`;
    const email = userData.email;
    const birthDay = userData.dob.date.split("T")[0];
    const gender = userData.gender;
    const image = userData.picture.large;
    const user = new User(name, email, birthDay, gender, image);
    users.push(user);
  });
  userList = users;
}

//setuje user list samo jednom

//onda ovaj pretrazuje
export function getSearchedUsers(searchTerm) {
  const users = userList;
  let counter = 0;
  const numberOfResult = 20;
  userList = users.filter(user => {
    const name = user.name.substring(0, searchTerm.length);
    console.log(name);
    console.log(searchTerm);
    if (
      name.toUpperCase() === searchTerm.toUpperCase() &&
      counter < numberOfResult
    ) {
      counter++;
      return true;
    }
  });
  return userList;
}
