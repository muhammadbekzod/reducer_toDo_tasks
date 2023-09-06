import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import UseEffectComponent from "./useState";
// import IndexInput from "./useState/indexInput";
import InputLike from "./useState/inputLike";
import Form from "./userReducer/useReducerFrom";
import ToDoList from "./userReducer/toDoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      {/* <InputLike /> */}
      {/* <Form /> */}
      <ToDoList />
    </>
  </React.StrictMode>
);
