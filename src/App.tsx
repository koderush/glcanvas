import React from "react";
import Chart from "./Chart";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="grid-container">
      <Chart id={"1"}/>
      <Chart id={"2"}/>
      <Chart id={"3"}/>
      <Chart id={"4"}/>
    </div>
  );
};

export default App;
