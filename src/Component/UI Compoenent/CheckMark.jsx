import "./UI.css";
import check from "../../assets/icon-check.svg";

function CheckMark(props) {
  function checkHandler() {
    if (props.working) {
      props.setTaskList((prev) => {
        let temp = [...prev];
        temp[props.index].check = !props.check;
        return temp;
      });
    }
  }
  return (
    <div
      className={`check-mark flex 
       ${props.check ? "checked" : ""}`}
      onClick={checkHandler}
    >
      <img src={check} alt="" />
    </div>
  );
}

export default CheckMark;
