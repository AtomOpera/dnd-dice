import React, { useState, useEffect } from "react";
import Dice from "./components/Dice";

export default function App() {
  return (
    <div className="App">
      {/* <ColumnnContainer> */}
      <h1>D&D Dice</h1>
      <Dice key="one"/>
      <Dice key="two"/>
    </div>
  );
}
