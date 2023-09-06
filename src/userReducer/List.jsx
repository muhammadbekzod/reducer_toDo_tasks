import { useState } from "react";

export default function List({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </div>
      ))}
    </ul>
  );
}
function Task({ task, onChange, onDelete }) {
  const [Editing, setEditing] = useState(false);
  let taskComp;

  if (Editing) {
    taskComp = (
      <>
        <input
          type="text"
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />

        <button
          onClick={() => {
            setEditing(false);
          }}
        >
          Saved
        </button>
      </>
    );
  } else {
    taskComp = (
      <>
        {task.text}
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      {/* <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      /> */}
      {taskComp}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
