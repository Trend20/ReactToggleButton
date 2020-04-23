import React from 'react';
import UserGreeting from './user/UserGreeting';
import GuestGreeting from './user/GuestGreeting';

function Greetings(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />
    }
    return <GuestGreeting />
}

export default Greetings;