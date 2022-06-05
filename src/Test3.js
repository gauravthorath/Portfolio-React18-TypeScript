import React, { useState } from "react";
const fetchData = () =>
  new Promise((r) => setTimeout(() => r(Date.now()), 100));

export default function Test3() {
  const [result, setResult] = useState();
  const data = fetchData().then((value) => setResult(value));

  return (
    <div>
      {result === data.tiString() ? <div>hello</div> : <div>good bye</div>}
    </div>
  );
}

//setResult is never called.
