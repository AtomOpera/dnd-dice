import Dice from "./components/Dice";

export default function App() {
  return (
    <div className="App">
      {/* <ColumnnContainer> */}
      <h1>D&D Dice</h1>
      <br />
      <br />
      <br />
      <Dice key="one" />
      <Dice key="two" />
    </div>
  );
}
