import React from "react";
import Profile from "./Components/Profile";
import Counter from "./Components/Counter";
import UserCard from "./Components/UserCard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Profile />
      <br></br>
      <br></br>
      <br></br>
      <Counter />
      <br></br>
      <br></br>
      <br></br>
      <h2>Hardcodeado:</h2>
      <UserCard name="Alice" age={30} occupation="Engineer" />
      <UserCard name="Bob" age={25} occupation="Designer" />
    </div>
  );
};

export default App;
