import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "icnrement": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "decrement": {
      return {
        name: state.name,
        age: state.age - 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
}

const intialState = { name: "Abdurashid", age: 19 };
export default function Form() {
  const [state, dispatch] = useReducer(reducer, intialState);
  function handeChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  function hangeIncreament() {
    dispatch({ type: "icnrement" });
  }
  function hangeDecrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <>
      <div>
        <input type="text" value={state.name} onChange={handeChange} />
        <div>
          <button onClick={hangeIncreament}>+</button>
          <button onClick={hangeDecrement}>-</button>
        </div>
        <p>Texted:{state.name}</p> <p>age:{state.age}</p>
      </div>
    </>
  );
}
