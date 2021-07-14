import React, { useState } from "react";
const { v4: uuidv4 } = require("uuid");


function TodoForm({ createTodo }) {
  const [fname, setFname] = useState('');
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (fname && task) {
      const newItem = {
        firstname: fname,
        task: task,
        id: uuidv4(),
        isComplete: false,
      };
      createTodo(newItem);
      setFname("");
      setTask("");
    } else {
      alert("enter both values.");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        id="name"
        name="name"
        value={fname}
        onChange={e => setFname(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter Task"
        id="task"
        name="name"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit!</button>
    </div>
  );
}

export default TodoForm;
