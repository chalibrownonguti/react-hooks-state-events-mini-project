import React from "react";
import Task from "./Task";

function TaskList({ task, deleteTask, click }) {
  const tasksList = tasks.map((task, id) => (
    <Task key={id} task={task} text={task.test} category click={click} />
  ));
  return <div className="tasks">{TaskList}</div>;
}

export default TaskList;
