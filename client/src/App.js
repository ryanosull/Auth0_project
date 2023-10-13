// import { useState, useEffect } from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import './styles/App.css'
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const {isLoading, error} = useAuth0();

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      {/* <h1>Page Count: {count}</h1> */}
      <h1 id="header">Auth0_project</h1>
      {error && <h2>User authentication error</h2>}
      {!error && isLoading && <h2>Loading...</h2>}
      {!error && !isLoading && (
        <>
        <Profile/>
        <LoginButton  />
        <LogoutButton />
        </>
      )}
    </div>
  );
}

export default App;