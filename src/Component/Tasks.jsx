import TaskCreate from "./TaskCreate";
import TaskDisplay from "./TaskDisplay";
import "./tasks.css";

function Tasks(props) {
  return (
    <div className="task-wrapper">
      <div className={`task-inner-wrapper ${props.themeCss}`}>
        <TaskCreate themeCss={props.themeCss} />
      </div>

      <div className={`task-inner-wrapper last ${props.themeCss}`}>
        {props.taskList.map((task, i) => {
          return (
            <TaskDisplay task={task.task} key={i} themeCss={props.themeCss} />
          );
        })}

        <div className="flex task-info">
          <p>{props.taskList.length} items left</p>

          <p>Clear Completed</p>
        </div>
      </div>
    </div>
  );
}
export default Tasks;
