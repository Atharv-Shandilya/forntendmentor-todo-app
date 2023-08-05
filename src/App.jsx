import { useState } from "react";
import "./App.css";
import Tasks from "./Component/Tasks";
import moonSvg from "./assets/icon-moon.svg";
import sunSvg from "./assets/icon-sun.svg";
function App() {
  const [theme, setTheme] = useState(true);

  let demoTaskList = [
    { task: "Jog around the park x3" },
    { task: "10 minutes meditation" },
    { task: "Read for 1 hour" },
    { task: "Pick up the groceries" },
    { task: "Complete Todo App on Frontend Mentor" },
  ];

  const [taskList, setTaskList] = useState([...demoTaskList]);
  function themeHandler() {
    if (theme) setTheme(false);
    else setTheme(true);
  }

  let themeCss = theme ? "light" : "dark";
  return (
    <div className={`task-container ${themeCss}`}>
      <div className="task">
        <div className="task-header flex">
          <h2 className="task-title">TODO</h2>
          <div className="task-theme" onClick={themeHandler}>
            <img src={theme ? moonSvg : sunSvg} alt="" />
          </div>
        </div>
        <div className="task-list">
          <Tasks taskList={taskList} themeCss={themeCss} />
          <p className={`task-instruction ${themeCss}`}>
            Drag and drop to recorder list
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
