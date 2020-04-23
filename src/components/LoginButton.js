import React from 'react';

const LoginButton = (props) =>{
    return(
        <button className="login" onClick={props.onClick}>
            Login
        </button>
    )
}

export default LoginButton;