import React, { useState } from "react";
import Item from "./component/Item.js";
import Item1 from "./component/Item1.js";
import Item2 from "./component/Item2.js";

import TodoForm from "./component/TodoForm.js";
const { v4: uuidv4 } = require("uuid");

function List() {
  const [list, setList] = useState([
    {
      id: uuidv4(),
      firstname: "Tyler",
      task: "mow grass",
      isComplete: false
    },
    {
      id: uuidv4(),
      firstname: "Dave",
      task: "bring milk",
      isComplete: true
    },
    {
      id: uuidv4(),
      firstname: "Saahil",
      task: "rob a bank",
      isComplete: false
    }
  ]);

  const createTodo = newItem => {
    setList(abc => [...list, newItem]);
  };

  const handleRemove = id => {
    const removePerson = list.filter(t => t.id !== id);
    setList(removePerson);
  };

  const handleToggle = id => {
    const updatedTodo = list.map(item =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    setList(updatedTodo);
  };

//edit single property in the state
  const handleEdit = (id, task) => {
  const updatedTodo = list.map(item =>
    item.id === id ? { ...item, task:task } : item
  );
  setList(updatedTodo);
  };

  //edit multiple property in the state
  const handleEdit1 = (id, firstname, task) => {
  const updatedTodo = list.map(item =>
    item.id === id ? { ...item, firstname:firstname, task:task } : item
  );
  setList(updatedTodo);
  };

  const handleEdit2 = (id, value) => {
  const updatedTodo = list.map(item =>
    item.id === id ? { ...item, firstname:value.firstName, task:value.task } : item
  );
  setList(updatedTodo);
  };




  return (
    <div>
      <p>
        {list.map(item => (
          <Item2
            key={item.id}
            id={item.id}
            isComplete={item.isComplete}
            firstname={item.firstname}
            task={item.task}
            Toggle={handleToggle}
            Remove={handleRemove}
            Edit={handleEdit}
            Edit1={handleEdit1}
            Edit2={handleEdit2}
          />
        ))}
      </p>
      <div>
        <TodoForm createTodo={createTodo} />
      </div>
    </div>
  );
}

export default List;
