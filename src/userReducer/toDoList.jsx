import React, { useReducer } from "react";
import AddTask from "./addedTask";
import List from "./List";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "edited": {
      return tasks.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        } else {
          return item;
        }
      });
    }
    case "deleted": {
      return tasks.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default function ToDoList() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handeChangeTask(task) {
    dispatch({
      type: "edited",
      task: task,
    });
  }
  function handeDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <div>
      <h1>ToDoList</h1>
      <AddTask onAddTask={handleAddTask} />
      <div>
        {/* <li tasks={tasks} value={initialTasks} /> */}
        <div>
          <List
            tasks={tasks}
            onChangeTask={handeChangeTask}
            onDeleteTask={handeDeleteTask}
          />
        </div>
        {/* <button>edit</button>
        <button>delete</button> */}
      </div>
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  {
    id: 0,
    text: "Be coder",
    done: true,
  },
  {
    id: 1,
    text: "Abdurashid",
    done: true,
  },
  {
    id: 2,
    text: "Asadbek",
    done: true,
  },
];
