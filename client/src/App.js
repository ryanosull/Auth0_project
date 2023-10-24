import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import './styles/App.css'
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const {isLoading, error} = useAuth0(); //useAuth0 hook

  return (                   // conditional rendering based on authentication status and loading states.
    <div className="App">
      <h1 id="header">Auth0_project</h1>
      {error && <h2>User authentication error</h2>}   
      {!error && isLoading && <h2>Loading...</h2>}
      {!error && !isLoading && (
        <>
        <LoginButton  />
        <Profile/>
        <LogoutButton />
        </>
      )}
    </div>
  );
}

export default App;