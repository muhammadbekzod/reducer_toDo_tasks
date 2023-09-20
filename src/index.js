import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import UseEffectComponent from "./useState";
// import IndexInput from "./useState/indexInput";
import InputLike from "./useState/inputLike";
import Form from "./userReducer/useReducerFrom";
import ToDoList from "./userReducer/toDoList";
import UseRefComponent from "./useRef";
import UseRefFocus from "./useRef/focus";
import HefContainer from "./useRef/hefContainer";
import Flower from "./useRef/flower";
import UseContext from "./useContext";
import MyApp from "./useContext/text";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      {/* <InputLike /> */}
      {/* <Form /> */}

      {/* <ToDoList /> */}
      {/* <UseRefComponent /> */}
      {/* <UseRefFocus /> */}
      {/* <HefContainer /> */}
      {/* <Flower /> */}
      <UseContext />
      <MyApp />
    </>
  </React.StrictMode>
);
