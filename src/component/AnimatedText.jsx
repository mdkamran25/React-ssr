import React, {useState, useEffect} from "react";
import "./animatedEffect.css"

const AnimatedText = ({ text }) => {
    const [mount, setMount] = useState(false)

    useEffect(()=>{
        setMount(true)
    }, [])
  return (
    <>
      {text.split("").map((char, i) => {
        return (
          <span key={i} className={`text-animate ${char === " " ? "space": ""}  ${mount ? "onMount" : ""}`}>
            {char}
          </span>
        );
      })}
    </>
  );
};

export default AnimatedText;
