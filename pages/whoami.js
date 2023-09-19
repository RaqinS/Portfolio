import React, { useState } from "react";
import "./TypingEffect.css";

function Whoami({ onFinish }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index < 7) {
        setText(text + "$whoami".charAt(index));
        setIndex(index + 1);
      } else {
        clearInterval(interval);
        onFinish && onFinish();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <p className="terminal-text">
      <span style={{fontSize: '30px', textAlign: 'center'}}>{text}</span>
    </p>
  );
}

export default Whoami;
















