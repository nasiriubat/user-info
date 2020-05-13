import React from 'react';
import './UserCorner.css'

const UserCorner = (props) => {
    const corner = props.corner;
    const count=props.count;
    const totalSalary = corner.reduce((total, usr) => total + usr.salary, 0);
    return (
        <div >
            <h3  >Add Details </h3>
            <br/>
            <p>Total added : {count}</p>
            <p>Total Salary : {totalSalary}</p>
        </div>
    );
};

export default UserCorner;