//Make sure to import React so you can use it
import React, { useState } from 'react'; 

//import the css file
import './User.css';

//Create a component
const UserMenu = (props) => {

    //Menu states
    const [menuState, setMenuState] = useState({   
        task: {
            list: []
        },
    });


    return (
        <div class="UserInfo">
            <h3>Hi {props.userName}</h3>
            <h4>This is your list: </h4>
            <label for="task">Add a new task:</label>
                <br/>
                <input type="text" placeholder="Task"></input>
                <br/>
                <button>Enter Task</button>
        </div>
    );
}


export default UserMenu;