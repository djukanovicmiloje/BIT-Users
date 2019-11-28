async function fetchUsersData(){
    const response = await fetch('https://randomuser.me/api/?results=20');
    const data = await response.json();

    return data.results;
}

export default fetchUsersData;