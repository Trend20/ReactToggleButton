import React, { Component } from 'react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greetings from './Greetings';

class LoginControl extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: false,
        };
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick(){
        this.setState({
            isLoggedIn: true
        });
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {      
            button = <LogoutButton  onClick={this.handleLogoutClick} />;
            }
        else {      
            button = <LoginButton  onClick={this.handleLoginClick} />;
            }
        return(
            <div>
             <Greetings isLoggedIn={isLoggedIn} />
             {button}
            </div>
        )
    }
}

export default LoginControl;