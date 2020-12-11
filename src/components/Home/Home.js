import React, {useEffect} from 'react';

import UsersList from './UsersList/UsersList';

function HomeApp(props){

    useEffect(()=>{
        document.title = "Integrify Pre-Assignment 2020";
    },[]);

    return(
        <div className="w3-container">
            <h1 className="w3-center">Users List</h1>
            <br/><br/><br/>
            <div className="w3-content">
                <UsersList users={props.users} />
            </div>
        </div>
    );
}

export default HomeApp;