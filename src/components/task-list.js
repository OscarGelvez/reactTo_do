import React, { Fragment } from "react";
import Task from './task'

function Tasklist(props){
    return(
        <Fragment>
            {props.tasks.map((task, id) =>
            <Task 
                key={id}
                value={task}
            />
            )}
        </Fragment>
    );

}

export default Tasklist;