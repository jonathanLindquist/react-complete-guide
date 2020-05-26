import React from 'react';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={props.changeUsername} value={props.username} />
        </div>
    );
}

export default userInput;