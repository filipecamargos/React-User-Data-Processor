//Make sure to import React so you can use it
import React, { useState } from 'react'; 
//import the css file
import './User.css';
import UserInfo from './UserInfo'

//Create a component
const User = (props) => {

    //User states
    const [userState, setUserState] = useState({  
        user: {
            name: "",
            email: "",
        },
    });

    //Change name on submit
    const changeName = (event) => {
        event.preventDefault()
        setUserState({
            user: {
                name: event.target.name.value,
                email: event.target.email.value,
            }, 
        })
    }

    //return the info need for the form and a Info tag
    return (
        <div class="User">
            <form onSubmit={changeName}>
                <label for="phone">Name:</label>
                <br/>
                <input type="text" placeholder="Name" name="name"></input>
                <br/>
                <label for="phone">Email:</label>
                <br/>
                <input type="text" placeholder="Password" name="email"></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <UserInfo
                userName={userState.user.name} 
                userEmail={userState.user.email}
            />
        </div>
    );
}


export default User;