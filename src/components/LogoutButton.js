import React from 'react';

const LogoutButton = (props) =>{
    return(
        <button className="logout" onClick={props.onClick}>
            Logout
        </button>
    )
}

export default LogoutButton;