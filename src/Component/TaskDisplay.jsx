import CheckMark from "./UI Compoenent/CheckMark";
import Remove from "./UI Compoenent/Remove";

function TaskDisplay(props) {
  return (
    <div className="tasks flex display">
      <CheckMark />
      <p className="tasks-task">{props.task}</p>
      <Remove />
    </div>
  );
}

export default TaskDisplay;
