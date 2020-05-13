import React from 'react';
import './User.css';
import fakeData from '../../fakeData/users';
import UserList from '../UserList/UserList';
import UserCorner from '../UserCorner/UserCorner';
import { useState } from 'react';

const User = () => {
    const user15 = fakeData.slice(0, 15);
    const [user, setUser] = useState(user15);
    const [corner, setCorner] = useState([]);
    const [count, setCount] = useState(0);
    const handleEvent = (user) => {
        setCorner([...corner, user]);
        setCount(count+1);
    }
    return (
        <div className="user-container">
            <div className="user-list">
                {
                    user.map(us => <UserList handleEvent={handleEvent} users={us}></UserList>)
                }

            </div>
            <div className="user-corner">
                <UserCorner corner={corner} count={count}></UserCorner>

            </div>
        </div>
    );
};

export default User;