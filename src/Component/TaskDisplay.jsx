import CheckMark from "./UI Compoenent/CheckMark";
import Remove from "./UI Compoenent/Remove";
function TaskDisplay(props) {
  let checked = props.check ? "done" : "";
  return (
    <div className="tasks flex display">
      <CheckMark
        setTaskList={props.setTaskList}
        index={props.index}
        check={props.check}
        working={true}
      />
      <p className={`tasks-task ${props.themeCss} ${checked}`}>{props.task}</p>
      <Remove setTaskList={props.setTaskList} id={props.id} />
    </div>
  );
}

export default TaskDisplay;
