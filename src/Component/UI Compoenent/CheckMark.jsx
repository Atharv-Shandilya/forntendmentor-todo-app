import "./UI.css";
import check from "../../assets/icon-check.svg";
import { useState } from "react";
function CheckMark() {
  const [checked, setChecked] = useState(false);
  function clickHandler() {
    console.log(checked);
    if (checked) setChecked(false);
    else setChecked(true);
  }
  return (
    <div
      className={`check-mark flex ${checked ? "checked" : ""}`}
      onClick={clickHandler}
    >
      <img src={check} alt="" />
    </div>
  );
}

export default CheckMark;
