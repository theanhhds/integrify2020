import React from 'react';
import UserTag from './UserTag';

function UsersList(props){
    const users = props.users;
    console.log("UsersList: ", users);
    let list = new Array(), cols = new Array(), row = new Array();

    users.map((item, index) => {
        cols.push(<div className="w3-col l4 w3-section"><UserTag user={item} /></div>);

        if (((index + 1) % 3 == 0) || (index+1 == users.length)){
            row = 
                <div className="w3-row-padding">
                    {cols}
                </div>
            list.push(row);
            cols = [];
            row = [];
        }
    });

    return(
        <div>
            {list}
        </div>
    );
}

export default UsersList;