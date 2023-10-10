import { useState, useEffect } from "react";
import LoginButton from "./components/LoginButton";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>


      <LoginButton/>

      

    </div>
  );
}

export default App;