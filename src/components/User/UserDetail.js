import React, {useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import Detail from './Detail';

function UserDetail(props){
    let users = props.users;
    const {id} = useParams();

    useEffect(()=>{
        document.title = users[id-1].name + " - Integrify Pre-Assignment 2020";
    },[]);
    return(
        <div className="w3-container w3-center">
            <h1>User Detail</h1>
            <br/><br/><br/><br/><br/>
            <div className="w3-content">
                <Detail user={users[id-1]} />
            </div>
            <br/><br/><br/><br/><br/>
            <NavLink to="/">
                <div className="w3-btn w3-blue w3-round-large">Back to Users List</div>
            </NavLink>
        </div>
    );
}

export default UserDetail;