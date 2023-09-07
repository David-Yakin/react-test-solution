import { useState, FC } from "react";

type ShulaDivProps = {
  color: string;
};

const ShulaDiv: FC<ShulaDivProps> = ({ color }) => {
  const shulaStyle = {
    height: "100px",
    width: "100px",
    backgroundColor: color,
  };
  return <div style={shulaStyle}></div>;
};

function ColoredDivs() {
  const [colorArray, setColor] = useState<string[]>([]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  const addDiv = () => setColor((prev) => [...prev, getRandomColor()]);
  const clearAllDivs = () => setColor([]);

  return (
    <div>
      <button onClick={addDiv}>Click To Add Div</button>
      {!!colorArray.length && (
        <button onClick={clearAllDivs}>Click To Clear All Divs!</button>
      )}
      {!colorArray.length && <p>NO DIV to show!!!</p>}
      {!!colorArray.length && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {colorArray.map((color, i) => (
            <ShulaDiv color={color} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ColoredDivs;
