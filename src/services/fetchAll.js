async function fetchAllUsers() {
  const response = await fetch("https://randomuser.me/api/?results=200");
  const data = await response.json();

  return data.results;
}
export default fetchAllUsers;
