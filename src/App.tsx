import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Alinur Mirlan uulu CI/CD</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
