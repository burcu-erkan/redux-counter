import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1 className={counter > 0 ? "poz" : counter < 0 ? "neg" : null}>
        {" "}
        {counter}
      </h1>
      <div className="buttons">
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      </div>

      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
