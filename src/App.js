import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import "./styles.css";

const ColumnnContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`;

const RowContainer = styled.div`
  display: flex;
  // flex-wrap: no-wrap;
  justify-content: space-between; //space-around;
  padding: 6px;
`;

export default function App() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [dice, setDice] = useState(20);
  const [plus, setPlus] = useState(0);
  const [result, setResult] = useState(0);
  const [minMax, setMinMax] = useState(0);
  const [average, setAverage] = useState(0);

  // function handleChange(event) {
  //   setDice(event.target.value);
  // }

  function handleSubmit(event) {
    // if (!plus) {setPlus=0;}
    const min= 1 + parseInt(plus);
    const max= parseInt(dice) + parseInt(plus);
    const average= (min+max)/2;
    setResult((Math.floor(Math.random() * dice) + 1)+ parseInt(plus));
    setMinMax(`${min}-${max}`);
    setAverage(average);
    // alert('Your favorite flavor is: ' + dice);
    event.preventDefault();
  }

  return (
    <div className="App">
      {/* <ColumnnContainer> */}
      <h1>D&D Dice</h1>
      
        <form onSubmit={handleSubmit}  style={{padding:"6px"}}>
        {/* <RowContainer> */}
             <select 
              value={diceNumber} 
              onChange={(e) => {setDiceNumber(e.target.value)}}
              style={{padding:"6px"}}
            >

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          <label style={{padding:"6px"}}>
            {"dice of "} 
            <select 
              value={dice} 
              onChange={(e) => {setDice(e.target.value)}}
              style={{padding:"6px"}}
            >

              <option value="4">d4</option>
              <option value="6">d6</option>
              <option value="8">d8</option>
              <option value="10">d10</option>
              <option value="12">d12</option>
              <option value="20">d20</option>
            </select>
          </label>
          {"+ "} 
          <input 
            type="text" 
            placeholder="1 for example" 
            onChange={(e) => {setPlus(e.target.value || 0)}}
            style={{padding:"6px"}} 
          />
          <input type="submit" value="Submit" style={{padding:"6px"}} />
          {/* </RowContainer> */}
        </form>
      
      {/* </ColumnnContainer> */}
      <br />
      {/* {diceNumber}{" "}{dice}{" + "}{plus} */}
      <br />
      {"Min-Max: "}{minMax}
      <br />
      {" Average: "}{average}
      <br />
      {"Result: "}{result}
    </div>
  );
}
