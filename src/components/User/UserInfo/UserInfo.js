//Make sure to import React so you can use it
import React from 'react'
//import the css file
import '../User/User.css';

//Create a component
const UserInfo = (props) => {
    return (
        <div class="UserInfo">
            <h3>User Info Result:</h3>
            <p>Name: {props.userName}</p>
            <p>Email: {props.userEmail}</p>
        </div>
    );
}


export default UserInfo;