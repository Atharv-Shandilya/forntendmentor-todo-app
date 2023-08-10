import cross from "../../assets/icon-cross.svg";
import "./UI.css";

function Remove(props) {
  function removeHandler() {
    props.setTaskList((prev) => {
      let temp = [...prev];
      return temp.filter((curr) => {
        if (curr.id != props.id) {
          return curr;
        }
      });
    });
  }
  return (
    <div className="remove" onClick={removeHandler}>
      <img src={cross} alt="" />
    </div>
  );
}
export default Remove;
