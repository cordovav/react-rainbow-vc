import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
//make sure to import component once it is built
import ColorBlock from "./ColorBlock";

function App() {
  let colors = [
    "violet",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
  ];
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color}/>
    )
  });
  return(
    <div className="App">
      {colorMap}
    </div>
  )
}

export default App;
