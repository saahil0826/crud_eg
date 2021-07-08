import React, { useState } from "react";

function Item1({ id, firstname, task, isComplete, Toggle, Remove, Edit1 }) {
  const [isEditing, setisEditing] = useState(false);
  const [f_name, setFirstname] = useState(firstname);
  const [t_ask, setTask] = useState(task);

const handleSubmit = e => {
  e.preventDefault();
  Edit1(id, f_name, t_ask);
  setisEditing(!isEditing)
};

  return (
    <div>
    {isEditing ? (
<div>
<input
  type="text"
  id="name"
  name="name"
  value={f_name}
  onChange={e => setFirstname(e.target.value)}
/>
<input
  type="text"
  id="task"
  name="name"
  value={t_ask}
  onChange={e => setTask(e.target.value)}
/>
<button onClick={handleSubmit}>Submit!</button>
</div>
) :(
  <>
      <div>
        The person's first name is <strong>{firstname}</strong>{" "}
      </div>

      <div>
        the task is:{" "}
        <span
          style={{
            textDecoration: isComplete ? "line-through" : "none"
          }}
        >
          {task}
        </span>
      </div>

      <button
        type="button"
        style={{ color: "green" }}
        onClick={() => Toggle(id)}
      >
        {isComplete ? "Undo" : "Done"}
      </button>
      <button
        style={{ color: "orange" }}
        onClick={() => setisEditing(!isEditing)}
      >
        Edit
      </button>
      <button style={{ color: "red" }} onClick={() => Remove(id)}>
        Delete
      </button>
      </>
    )}
    </div>
  );
}
export default Item1;
