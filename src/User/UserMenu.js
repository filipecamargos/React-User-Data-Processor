//Make sure to import React so you can use it
import React, { useState } from 'react'; 

//import the css file
import './User.css';

//Create a component
const UserMenu = (props) => {

    //Menu states
    const [menuState, setMenuState] = useState({   
        task: {
            taskList: [],
        },
        taskValue: ""
    });

    //Set a task value
    const setTask = (newTask) => {

        //Update the latest Task
        setMenuState({
            task: {...menuState},
            taskValue: newTask
        })
    }

            // //Copy the old value
        // var oldStateValues = {...menuState};


        
        // //Create temporary list
        // var tempTaskList = [];
        
        // //Push to the list the value
        // tempTaskList.push(taskValue)

        // //update the state
        // setMenuState({
        //     task: {
        //         taskList: tempTaskList,
        //     },
        // })

    return (
        <div class="UserInfo">
            <h3>Hi {props.userName}</h3>
            <h4>This is your list: </h4>
            <label for="task">Add a new task:</label>
                <br/>
                <input type="text" placeholder="Task" name="taskName" onChange={event => setTask(event.target.value)}></input>
                <br/>
                <button>Enter Task</button>
        </div>
    );
}


export default UserMenu;