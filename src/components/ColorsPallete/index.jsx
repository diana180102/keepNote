import styles from "../ColorsPallete/colorspalette.module.css";
// import { useState } from 'react'
import { RenderPalette } from "./RenderPalette/index";

export function ColorsPalette() {

  const backgroundColors = {
    white: "white",
    red: "#f28b82",
    orange: "#fbbc04",
    yellow: "#fff475",
    green: "#ccff90",
    cian: "#a7ffeb",
    blue: "#cbf0f8",
    azure: "#aecbfa",
    purple: "#d7aefb",
    pink: "#fdcfe8",
  };

  // const [backgroundColor, setBackgroundColor] = useState("white");

  // function setColor(color) {
  //   console.log(color);
  //   // editNote(id, { color: color });
  //   setShowColorsPalette(!showColorsPalette);
  //   setBackgroundColor(backgroundColors[color]);
  // }

  return (
    <div className={styles.colors}>
      {Object.keys(backgroundColors).map((color) => (
        <RenderPalette
          key={Math.random()}
          color={color}
        />
      ))}
    </div>
  );
}
