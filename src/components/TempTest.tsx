import React, { useState } from "react";
import "./css/test.css";

const TempTest = () => {
  var colorString = "white";
  const [colorStringState, setColorStringState] = useState("white");
  const varArray = [1, 2];
  const [stateArray, setStateArray] = useState([1, 2]);

  const logVar = () => {
    console.log("string state", colorStringState);
    console.log("String var", colorString);
    console.log("var Array", varArray);
    console.log("state Array", stateArray);
  };

  const addArray = () => {
    varArray.push(3);
    setStateArray([...stateArray, 3]);
  };

  const showCards = () => {
    var output: JSX.Element[] = [];

    return <React.Fragment>{output}</React.Fragment>;
  };

  const changeString = () => {
    if (colorString === "white") {
      colorString = "black";
      setColorStringState("black");
    } else {
      colorString = "white";
      setColorStringState("white");
    }
  };

  const listArray = (array: number[], name: string) => {
    var output: JSX.Element[] = [];
    for (let i = 0; i < array.length; i++) {
      output.push(
        <div>
          {name}
          {array[i]}
        </div>
      );
    }
    return <React.Fragment>{output}</React.Fragment>;
  };
  const effected = () => {
    return <div className={colorStringState}>ColorStringState</div>;
  };

  return (
    <div>
      <button onClick={() => logVar()}>log</button>
      <button onClick={() => changeString()}>change string</button>
      <button onClick={() => addArray()}>add to arrays</button>
      {/* colour change parts */}
      {/* <div className={colorString}>colorString</div>
      <div className={colorStringState}>ColorStringState</div> */}
      {effected()}
      {/* list items */}
      {listArray(varArray, "var")}
      {listArray(stateArray, "state")}
    </div>
  );
};

export default TempTest;
