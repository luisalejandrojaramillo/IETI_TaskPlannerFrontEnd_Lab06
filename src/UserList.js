import React, {Component} from 'react';

export class UserList extends React.Component {

    render(){
        const lista = this.props.usersList.map((user,i) => 
            <h2> userId : {user.user.userId} name : {user.user.userName} email : {user.user.email} password : {user.user.password} </h2>
        );
        return(
            <div>
                <h1>Listado de usuarios:</h1>
                {lista}
            </div>
        );
    }
}
export default UserList;