async function fetchUsersData() {
  const response = await fetch("https://randomuser.me/api/?results=20");
  const data = await response.json();
  const usersList = data.results;
  localStorage.setItem("users", JSON.stringify(usersList));

  return data.results;
}

export default fetchUsersData;
