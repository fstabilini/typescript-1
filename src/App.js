import React from "react";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import TodoList from "./components/TodoList";
import ProfileCard from "./components/ProfileCard";
import Greeting from "./components/Greeting";
import ItemList from "./components/ItemList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Profile />
      <hr />
      <Counter />
      <hr />
      <UserCard name="Alice" age={30} occupation="Engineer" />
      <UserCard name="Bob" age={25} occupation="Designer" />
      <hr />
      <TodoList />
      <hr />
      <ProfileCard />
      <hr />
      <Greeting name={"Flor"} />
      <hr />
      <ItemList />
    </div>
  );
};

export default App;
