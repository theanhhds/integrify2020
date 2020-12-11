import React from 'react';

function Detail(props){
    const user = props.user;
    return(
        <div className="w3-container w3-card-4 w3-padding-large">
            <h2 className="w3-center">{user.name}</h2>
            <table className="w3-table">
                <tr><th>Username:</th><td>{user.username}</td></tr>
                <tr><th>Email:</th><td>{user.email}</td></tr>
                <tr><th>Phone:</th><td>{user.phone}</td></tr>
                <tr><th>Address:</th><td>{user.address.street} {user.address.suite}, {user.address.zipcode}, {user.address.city}</td></tr>
                <tr><th>Website:</th><td>{user.website}</td></tr>
                <tr><th>Company:</th><td>{user.company.name} - {user.company.catchPhrase}</td></tr>
            </table>
        </div>
    );
}

export default Detail;