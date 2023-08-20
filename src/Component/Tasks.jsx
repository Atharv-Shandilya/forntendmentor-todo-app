import TaskCreate from "./TaskCreate";
import TaskDisplay from "./TaskDisplay";
import { useState } from "react";

import "./Tasks.css";
import TaskSort from "./TaskSort";

function Tasks(props) {
  const [taskList, setTaskList] = useState([]);
  const [active, setActive] = useState(0);
  let length = taskList.length;
  for (let task of taskList) {
    if (task.check) {
      length--;
    }
  }

  let sortedTaskList = [];

  if (active == 0) {
    sortedTaskList = taskList;
  } else if (active == 1) {
    sortedTaskList = taskList.filter((curr) => {
      if (!curr.check) {
        return curr;
      }
    });
  } else {
    sortedTaskList = taskList.filter((curr) => {
      if (curr.check) {
        return curr;
      }
    });
  }
  function clearHandler() {
    setTaskList((prev) => {
      let temp = [...prev];
      return temp.filter((task) => {
        if (!task.check) {
          return task;
        }
      });
    });
  }

  return (
    <div className="task-wrapper">
      <div className={`task-inner-wrapper ${props.themeCss}`}>
        <TaskCreate themeCss={props.themeCss} setTaskList={setTaskList} />
      </div>

      <div className={`task-inner-wrapper list ${props.themeCss}`}>
        {sortedTaskList.map((task, i) => {
          return (
            <TaskDisplay
              key={task.id}
              index={i}
              id={task.id}
              themeCss={props.themeCss}
              task={task.task}
              setTaskList={setTaskList}
              check={task.check}
            />
          );
        })}

        <div className="flex task-info">
          <p>
            {length + " "}
            items left
          </p>
          <TaskSort mobile={false} setActive={setActive} active={active} />
          <p className="clear" onClick={clearHandler}>
            Clear Completed
          </p>
        </div>
      </div>

      <div className={`task-inner-wrapper mobile ${props.themeCss}`}>
        <TaskSort mobile={true} setActive={setActive} active={active} />
      </div>
    </div>
  );
}
export default Tasks;
