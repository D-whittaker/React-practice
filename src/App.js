import Todo from "./components/Todo";
import Filter from "./components/FilterButton";
import Form from "./components/Form";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map(task => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` prop has been inverted
      return {...task, completed: !task.completed}
    }
    return task;
  });
  setTasks(updatedTasks);
  }
  const taskList = tasks.map(task => (
  <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} 
  toggleTaskCompleted={toggleTaskCompleted}     deleteTask={deleteTask}/>));
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  function addTask(name){
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  function editTask(id){

  }
  return (
    <div className="todoapp stack-large">{/* the title of the project*/}
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>{/*the end of the this could be its own part*/}
      <div className="filters btn-group stack-exception">
        <Filter />
        <Filter />
        <Filter />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
