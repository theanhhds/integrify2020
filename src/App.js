import React, {useState, useEffect} from 'react';

import {Switch, BrowserRouter, Route} from 'react-router-dom';
import HomeApp from './components/Home/Home';
import UserDetail from './components/User/UserDetail';

function App(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data=>{
            setUsers(data);
        })
    }, []);

    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <HomeApp users={users} />
                    </Route>
                    <Route path="/user/:id">
                        <UserDetail users={users} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;