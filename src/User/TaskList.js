//Make sure to import React so you can use it
import React from 'react'
//import the css file
import './User.css';


//Create a component
const TaskList = (props) => {

    var listOfTask = [...props.taskList];
    return (
        <div>
            {listOfTask.map((task, index) => {
                <div>
                    <li>Hello</li>
                </div>
            })
            }
        </div>
    );
}


export default TaskList;