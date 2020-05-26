import React from 'react';

import './Person.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <UserInput changeUsername={props.changeUsernameHandler} username={props.username} />
            <UserOutput username={props.username} />
        </div>
    );
}

export default person;