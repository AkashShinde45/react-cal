import React from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({ inputHandler, clearInput, backspace, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className="show-btn">
      
      <button className="btn clr" onClick={clearInput}>
        AC
      </button>
      <button className="btn clr" onClick={backspace}>
        C
      </button>
      
      <button className="btn exp" onClick={inputHandler}>
        ÷
      </button>
      <button className="btn exp" onClick={inputHandler}>
        %
      </button>
      <button className="btn" onClick={inputHandler}>
        7
      </button>
      
      <button className="btn" onClick={inputHandler}>
        8
      </button>
      <button className="btn exp" onClick={inputHandler}>
        9
      </button>
      
     
      <button className="btn" onClick={inputHandler}>
        x
      </button>
      <button className="btn exp" onClick={inputHandler}>
        4
      </button>
     
      <button className="btn" onClick={inputHandler}>
        5
      </button>
      <button className="btn" onClick={inputHandler}>
        6
      </button>
      <button className="btn" onClick={inputHandler}>
        -
      </button>
      <button className="btn exp" onClick={inputHandler}>
        1
      </button>
      <button className="btn exp" onClick={inputHandler}>
        2
      </button>
     
      <button className="btn exp" onClick={inputHandler}>
        3
      </button>
     
      <button className="btn exp" onClick={inputHandler}>
        +
      </button>
      <button className="btn exp" onClick={inputHandler}>
        0
      </button>
     
     
      <button className="btn exp" onClick={inputHandler}>
        .
      </button>
      
      <button className="btn exp equal" id="equalbtn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};

export default Buttons;
