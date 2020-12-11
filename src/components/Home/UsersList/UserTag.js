import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

function UserTag(props){
    let user = props.user;
    return(
        <div>
            <div className="w3-container w3-padding-large w3-card w3-center">
                <div className="w3-padding w3-xxlarge">
                    <span className="w3-circle w3-light-grey w3-padding-large">{user.name.charAt(0)}</span>
                </div>
                <br/>
                <div><b>{user.name}</b></div>
                <div className="w3-text-grey">{user.email}</div>
                <div className="w3-text-blue"><a rel="noreferrer" href={user.website} target="_blank">{user.website}</a></div>
                <br/>
                <NavLink to={"/user/" + user.id}>
                    <div className="w3-btn w3-blue w3-round-large">MORE DETAILS</div>
                </NavLink>
            </div>
        </div>
    );
}

export default UserTag;