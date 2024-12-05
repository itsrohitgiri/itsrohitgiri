import React, { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1 style={{ color: color }}>My favorite color is {color}!</h1>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        Blue
      </button>
      <button
        type="button"
        onClick={() => {
          setColor((color) => "red");
        }}
      >
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
}
export default FavoriteColor;