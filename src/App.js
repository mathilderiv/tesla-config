import "./App.css";

import Button from "./Components/Button";

import { useState } from "react";

function App() {
  const [model, setModel] = useState(0);
  const [color, setColor] = useState(0);

  const calculateTotal = (model, color) => {
    let total = 0;
    if (model === 0) {
      total = total + 90700;
    } else if (model === 1) {
      total = total + 106700;
    } else {
      total = total + 133800;
    }

    if (color === 0) {
      total = total + 0;
    } else if (color === 1) {
      total = total + 1000;
    } else {
      total = total + 3500;
    }
    return total;
  };

  return (
    <div className="App">
      <h1>Tesla Config</h1>
      <div className="model">
        <h2>Sélectionnez votre véhicule</h2>
        <div className="model-choice">
          <Button
            text="Grande Autonomie -"
            price=" 90 700 euros"
            style={model === 0 ? "button-on" : "button-off"}
            func={() => {
              setModel(0);
            }}
          />

          <Button
            text="Performance -"
            price=" 106 700 euros"
            style={model === 1 ? "button-on" : "button-off"}
            func={() => {
              setModel(1);
            }}
          />

          <Button
            text="SUV -"
            price=" 133 800 euros"
            style={model === 2 ? "button-on" : "button-off"}
            func={() => {
              setModel(2);
            }}
          />
        </div>
      </div>

      <div className="color">
        <h2>Sélectionnez la couleur</h2>
        <div className="color-choice">
          <Button
            text="Blanc Nacré Multicouches - "
            price=" 0 euros"
            style={color === 0 ? "button-on" : "button-off"}
            func={() => {
              setColor(0);
            }}
          />

          <Button
            text="Noir Uni - "
            price=" 1 000 euros"
            style={color === 1 ? "button-on" : "button-off"}
            func={() => {
              setColor(1);
            }}
          />

          <Button
            text="Rouge mat -"
            price=" 3 500 euros"
            style={color === 2 ? "button-on" : "button-off"}
            func={() => {
              setColor(2);
            }}
          />
        </div>
      </div>

      <div className="total">
        <span style={{ marginRight: "30px", fontSize: "25px" }}>
          {calculateTotal(model, color)} euros
        </span>
        <button className="buy" onClick={() => alert("Thanks for buying")}>
          Buy !
        </button>
      </div>
    </div>
  );
}

export default App;
