import { useState } from "react";

function ToggleDiv() {
  const [isVisible, setVisibility] = useState(true);

  const handleVisibility = () => setVisibility((prev) => !prev);

  return (
    <div>
      <button onClick={handleVisibility}>{isVisible ? "Hide" : "Show"}</button>
      <div style={isVisible ? { display: "block" } : { display: "none" }}>
        This is the Div
      </div>
    </div>
  );
}

export default ToggleDiv;
