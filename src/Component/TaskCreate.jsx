import "./UI Compoenent/CheckMark";
import CheckMark from "./UI Compoenent/CheckMark";
import "./UI Compoenent/Remove";
function TaskCreate(props) {
  return (
    <div className={`flex tasks ${props.themeCss}`}>
      <CheckMark />
      <input
        type="text"
        className="tasks-task"
        placeholder="Create a new todo.."
      />
    </div>
  );
}

export default TaskCreate;
