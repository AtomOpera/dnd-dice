import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./../styles.css";

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

export default function Dice() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [dice, setDice] = useState(20);
  const [plus, setPlus] = useState(0);
  const [times, setTimes] = useState(1);
  const [result, setResult] = useState([0]);
  const [minMax, setMinMax] = useState(0);
  const [average, setAverage] = useState(0);
  const [diceArr, setDiceArr] = useState([[0]]);

  useEffect(() => {
    // Update the document when first open
    getStats();
  });

  // function handleChange(event) {
  //   setDice(event.target.value);
  // }

  function getStats() {
    const min = 1 * diceNumber + parseInt(plus);
    const max = parseInt(dice) * diceNumber + parseInt(plus);
    const average = (min + max) / 2;
    setMinMax(`${min}-${max}`);
    setAverage(average);
  }

  function handleSubmit(event) {
    let resultArray = [];
    let totalDiceArrayArray = [];
    for (let j = 0; j < times; j += 1) {
      let total = 0;
      let newDiceArr = [];
      for (let i = 1; i <= diceNumber; i += 1) {
        const thisDice = Math.floor(Math.random() * dice) + 1;
        newDiceArr.push(thisDice);
        total += thisDice;
      }
      totalDiceArrayArray.push(newDiceArr);
      resultArray.push(total + parseInt(plus));
    }
    setDiceArr(totalDiceArrayArray);
    setResult(resultArray);
    event.preventDefault();
  }

  return (
    <div className="Dice">
      {/* <ColumnnContainer> */}
      <form onSubmit={handleSubmit} style={{ padding: "6px" }}>
        {/* <RowContainer> */}
        <select
          value={diceNumber}
          onChange={(e) => {
            setDiceNumber(e.target.value);
            getStats();
          }}
          style={{ padding: "6px" }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <label style={{ padding: "6px" }}>
          {"dice of "}
          <select
            value={dice}
            onChange={(e) => {
              setDice(e.target.value);
              getStats();
            }}
            style={{ padding: "6px" }}
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
        <select
          value={plus}
          onChange={(e) => {
            setPlus(e.target.value || 0);
            getStats();
          }}
          style={{ padding: "6px" }}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>{" "}
        <select
          value={times}
          onChange={(e) => {
            setTimes(e.target.value || 1);
            getStats();
          }}
          style={{ padding: "6px" }}
        >
          <option value="1">1 time</option>
          <option value="2">2 times</option>
          <option value="3">3 times</option>
          <option value="4">4 times</option>
          <option value="5">5 times</option>
          <option value="6">6 times</option>
          <option value="7">7 times</option>
          <option value="8">8 times</option>
          <option value="9">9 times</option>
          <option value="10">10 times</option>
          <option value="11">11 times</option>
          <option value="12">12 times</option>
          <option value="13">13 times</option>
          <option value="14">14 times</option>
          <option value="15">15 times</option>
          <option value="16">16 times</option>
          <option value="17">17 times</option>
          <option value="18">18 times</option>
          <option value="19">19 times</option>
          <option value="20">20 times</option>
        </select>
        {/* <input 
            type="text" 
            placeholder="1 for example" 
            onChange={(e) => {setPlus(e.target.value || 0)}}
            style={{padding:"6px"}} 
          /> */}{" "}
        <input type="submit" value="Roll" style={{ padding: "6px" }} />
        {/* </RowContainer> */}
      </form>

      {/* </ColumnnContainer> */}
      {/* <br /> */}
      {/* {diceNumber}{" "}{dice}{" + "}{plus} */}
      {/* <br /> */}
      {"Min-Max: "}
      {minMax}
      <br />
      {" Average: "}
      {average}
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-evenly",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2px 25px"
          // width: "100%"
          // alignItems: "center"
          // flexGrow: "1"
          // width: "33%"
        }}
      >
        {result &&
          result.map((r, i) => (
            <div key={`${r}${i}`}>
              {`Result ${i + 1}:`}
              {`[${diceArr[i].toString()}]+${plus}=`}
              <b>{`${r}`}</b>
            </div>
          ))}
      </div>
      {/* {`Result: [${diceArr.toString()}] + ${plus} = ${result}`} */}
      {/* {"Result: "}<b>{result}</b>{" ["}{diceArr.toString()}{"] +"}{plus} */}
      {/* <br />
      {JSON.stringify(result)}
      <br />
      {JSON.stringify(diceArr)} */}
      <br />
      <br />
    </div>
  );
}
