import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
import './UserList.css';

const UserList = (props) => {
    const { name, email, phone, salary, image } = props.users;
    return (
        <div className="user">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="details">
                <h2 className="user-name">{name}</h2>
                <br/>
                <p>Email : {email}</p>
                <p>Phone : {phone}</p>
                <p>Annual salary : {salary}</p>
                <button onClick={()=>props.handleEvent(props.users)} className="add-btn"><FontAwesomeIcon icon={faUserPlus} />Add user</button>
            </div>
        </div>
    );
};

export default UserList;