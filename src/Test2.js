import React, { useState, useEffect } from "react";

export default function Test2(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Hello");
    setCounter(1);
  }, [props.visible]);
  return <div>{counter}</div>;
}
