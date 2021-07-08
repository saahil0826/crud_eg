import React, { useState } from "react";

function Item2({ id, firstname, task, isComplete, Toggle, Remove, Edit2 }) {
  const [isEditing, setisEditing] = useState(false);
  const [value, setValue] = useState({firstName:firstname, task:task});

const handleSubmit = e => {
  e.preventDefault();
  Edit2(id, value);
  setisEditing(!isEditing)
};

const handleChange = e => {
setValue({...value, [e.target.name]:e.target.value})
}

//async menthod
// function handleChange(event) {
//     setValue((prevState) => ({ ...prevState, [e.target.name]:e.target.value}));
//   }

  return (
    <div>
    {isEditing ? (
<div>
<input
  type="text"
  id="firstName"
  name="firstName"
  value={value.firstName}
  onChange={handleChange}
/>
<input
  type="text"
  id="task"
  name="task"
  value={value.task}
  onChange={handleChange}
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
export default Item2;
