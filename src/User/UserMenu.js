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
            newTask: ""
        },
    });

    const setTask = (newTask) => {
        //Check if there is any input
        if(newTask.trim().length > 0){
            
            //copy the taskset to a new one to be edit
            var newTaskSet = [...menuState.task.taskList]

            //Update the latest Task
            setMenuState({
                task: {
                    taskList: newTaskSet,
                    newTask: newTask.trim()
                },
            })
            
        }
    }

    //add the new task
    const addTask = () => {
        
        //copy the taskset to a new one to be edit
        var newTaskSet = [...menuState.task.taskList]

        //Edit the list by adding
        newTaskSet.push(menuState.task.newTask)

        //Update the latest Task
        setMenuState({
            task: {
                taskList: newTaskSet,
            },
        })

        console.log(menuState)
    }

    return (
        <div class="UserInfo">
            <h3>Hi {props.userName}</h3>
            <h4>This is your list: </h4>
            <label for="task">Add a new task:</label>
                <br/>
                <input type="text" placeholder="Task" name="taskName" onChange={event => setTask(event.target.value)}></input>
                <br/>
                <button onClick={addTask}>Enter Task</button>
        </div>
    );
}


export default UserMenu;