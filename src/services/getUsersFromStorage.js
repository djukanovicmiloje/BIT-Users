import User from "../entities/user";

function getUsersFromStorage() {
  const usersData = JSON.parse(localStorage.getItem("users"));
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
  //console.log(users);
  return users;
}

export default getUsersFromStorage;
