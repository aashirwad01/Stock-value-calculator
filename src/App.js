import { useState } from "react";
import "./styles.css";

export default function App() {
  var [state1, statefunc1] = useState("");
  var [state2, statefunc2] = useState("");
  var [state3, statefunc3] = useState("");
  var [statevalue, statefuncvalue] = useState("");
  function valuestock() {
    console.log(state1);
    if (state1 === "" || state2 === "" || state3 === "") {
      statefuncvalue("Please enter all values.");
    } else if (isNaN(state3) || isNaN(state2) || isNaN(state1)) {
      statefuncvalue("Please enter numerical values.");
    } else {
      var val = (parseInt(state3) - parseInt(state1)) * parseInt(state2);
      var percent =
        Math.abs((parseInt(state3) - parseInt(state1)) * 100) /
        parseInt(state1);

      if (val > 0 && percent < 50) {
        statefuncvalue(
          "Your Profit is " + val + "Rs profit percent is " + percent + "% "
        );
      } else if (val > 0 && percent >= 50) {
        statefuncvalue(
          "Congratulations ✨ Your Profit is " +
            val +
            " Rs profit percent is " +
            percent +
            "% ❤️"
        );
      } else if (val < 0) {
        statefuncvalue(
          "Ohh your stock is in Loss 😔 . Loss Value is " +
            Math.abs(val) +
            " Rs. Loss percent is " +
            percent +
            "% 😶"
        );
      }
    }
  }

  function setvalue1(event) {
    statefunc1(event.target.value);
  }
  function setvalue2(event) {
    statefunc2(event.target.value);
  }
  function setvalue3(event) {
    statefunc3(event.target.value);
  }

  return (
    <div className="App">
      <h1>Sort your Stocks</h1>
      <div id="h2-wrapper">
        <h2>Know the value you get on stocks instantly!</h2>
      </div>

      <div>
        <h3>Initial Price per Stock</h3>
        <input onChange={setvalue1} type="text" id="box-1" />
      </div>
      <div>
        <h3>No of Stocks</h3>
        <input onChange={setvalue2} type="text" id="box-1" />
      </div>
      <div>
        <h3>Final Price per Stock</h3>
        <input onChange={setvalue3} type="text" id="box-1" />
      </div>

      <div>
        <button onClick={() => valuestock()}>Find Value</button>
      </div>
      <h1>{statevalue}</h1>
    </div>
  );
}
