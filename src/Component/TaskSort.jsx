import "./Tasks.css";

function TaskSort(props) {
  function allHandler() {
    props.setActive(0);
  }

  function activeHandler() {
    props.setActive(1);
  }

  function completedHandler() {
    props.setActive(2);
  }

  return (
    <div className={`task-sort ${props.mobile ? "mobile" : ""}`}>
      <p
        className={`${props.active == 0 ? "active" : ""}`}
        onClick={allHandler}
      >
        All
      </p>
      <p
        className={`${props.active == 1 ? "active" : ""}`}
        onClick={activeHandler}
      >
        Active
      </p>
      <p
        className={`${props.active == 2 ? "active" : ""}`}
        onClick={completedHandler}
      >
        Completed
      </p>
    </div>
  );
}

export default TaskSort;
