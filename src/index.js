import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { concat, concat2, concat3, doMath, concat4 } from "./rest";

function App() {
  const str1 = "demo demoro";
  const str2 = "demoro mais abalou";
  const str3 = "humildemente tocando o terror";
  const addAll = concat4(doMath, concat3);
  return (
    <div className="App">
      <h1>Use of rest</h1>
      <h2>Expression function</h2>
      <p>{concat(str1, str2, str3)}</p>
      <h2>Declaration function</h2>
      <p>{concat2(str1, str2, str3)}</p>
      <h2>HighOrder function example 1</h2>
      <p>{concat3(doMath, str1, str2, str3)}</p>
      <h2>HighOrder function example 2</h2>
      <p>{addAll(str1, str2, str3)}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
