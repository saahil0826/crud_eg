import React, { useState } from "react";

function Item({ id, firstname, task, isComplete, Toggle, Remove, Edit }) {
  const [isEditing, setisEditing] = useState(false);
  const [value, setValue] = useState(task);

const handleSubmit = e => {
  e.preventDefault();
  Edit(id, value);
  setisEditing(!isEditing)
};

  return (
    <div>
    {isEditing ? (
<div>
<input
  type="text"
  id="task"
  name="task"
  value={value}
  onChange={e => setValue(e.target.value)}
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
export default Item;
