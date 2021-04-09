//Make sure to import React so you can use it
import React from 'react'
//Import CSS modules
import cssClasses from './TaskList.css'


//Create a component
const TaskList = (props) => {

    //Get the list from the props
    var taskList = props.task.task.taskList;

    //Create varaible that will hold the EJX list
    let listOfTaks  = null;

    //If the list is not empty set the resturns
    if(taskList.length > 0) {
        listOfTaks = (
            <div>
                {props.task.task.taskList.map((task, index) => {
                    return (
                        <div className={cssClasses.TaskList}>
                                <li>{task}</li>
                            
                        </div>
                    );
                })}
            </div>
        )
    }

    //return the EJX list 
    return(
        <div>
            {listOfTaks}
        </div>
    )
}


export default TaskList;