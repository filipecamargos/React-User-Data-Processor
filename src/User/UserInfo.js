//Make sure to import React so you can use it
import React from 'react'
//import the css file
import './User.css';

//Create a component
const userInfo = (props) => {
    return (
        <div class="UserInfo">
            <p>Name: {props.userName}</p>
            <p>Email: {props.userEmail}</p>
        </div>
    );
}


export default userInfo;