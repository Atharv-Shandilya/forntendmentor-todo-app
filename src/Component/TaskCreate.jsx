import { useState } from "react";
import "./UI Compoenent/CheckMark";
import CheckMark from "./UI Compoenent/CheckMark";

import "./UI Compoenent/Remove";

function TaskCreate(props) {
  const [input, setInput] = useState("");
  function enterHandler(e) {
    if (e.keyCode == 13) {
      props.setTaskList((prev) => {
        let temp = [...prev, { task: input, check: false, id: idGenerator() }];
        return temp;
      });

      setInput("");
    }
  }

  function idGenerator() {
    return Math.trunc(Math.random() * 1000);
  }

  function changeHandler(e) {
    setInput(e.target.value);
  }
  return (
    <div className={`flex tasks ${props.themeCss}`}>
      <CheckMark working={false} />
      <input
        type="text"
        className={`tasks-task ${props.themeCss}`}
        placeholder="Create a new todo.."
        value={input}
        onChange={changeHandler}
        onKeyDown={enterHandler}
      />
    </div>
  );
}

export default TaskCreate;
