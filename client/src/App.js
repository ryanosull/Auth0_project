import { useState, useEffect } from "react";
import LoginButton from "./LoginButton";
import Auth0Provider from "./Auth0Provider"


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
      <Auth0Provider>

      <LoginButton/>
      </Auth0Provider>
      

    </div>
  );
}

export default App;