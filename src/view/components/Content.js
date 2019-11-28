import React from 'react';
import User from '../../entities/user';
import UserCard from './UserCard';
import getUsers from '../../services/getUsers';
import './Content.css'
const placeHolder = new User('pera peric', 'perperic@gmail.com', '1.1.1111', 'male', 'https://via.placeholder.com/150');

class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            users : new Array(20).fill(placeHolder),
            layout : 'grid'
        }
        async function addUsers(){            
            this.setState({ users: await getUsers()});                    
        }; 
        const addUsersHandler = addUsers.bind(this);
        addUsersHandler();

    }
    render(){
        const layout = this.state.layout;
        return <div id="content">
            <button className="btn" id='grid' onClick={() => this.onGridClick()}><i className="fas fa-grip-horizontal"></i></button>
            <button className="btn" id='list' onClick={() => this.onListClick()}><i className="fas fa-list"></i></button>
            <button className="btn" id='reload' onClick={() => this.onReloadClick()}><i className="fas fa-redo"></i></button>
            {this.state.users.map( (user, i) => {
            return <UserCard key={i} user={user} layout={layout}/>
        })}
        </div>
    }
    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevState);
    // }
    componentWillUpdate(nextProps, nextState){
        console.log(nextState);
    }
    onGridClick(){
        this.state.layout = 'grid';
        this.setState(this.state);
        //console.log('ide')
    }
    onListClick(){
        this.state.layout = 'list';
        this.setState(this.state); 
    }
    async onReloadClick() {
        this.state.users = await getUsers();
        this.setState(this.state)
    }
}

export default Content;