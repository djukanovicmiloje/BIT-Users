import fetchUsersData from './fetchUsers';
import User from '../entities/user';

async function getUsers(){
    const usersData = await fetchUsersData();
    const users = [];
    usersData.forEach((userData) => {
        const name = `${userData.name.first} ${userData.name.last}`;
        const email = userData.email;
        const birthDay = userData.dob.date.split('T')[0];
        const gender = userData.gender;
        const image = userData.picture.large;
        const user = new User(name, email, birthDay, gender, image);
        users.push(user);        
    })
    return users;
}

export default getUsers;