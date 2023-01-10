import "./App.css";
import { datas } from "./data";
import CardList from "./components/CardList";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState(datas);
  const changeText = (e) => {
    const filteredUser = datas.filter((user) =>
      user.first.toLowerCase().includes(e.target.value)
    );
    setUserList(filteredUser);
  };
  return (
    <div className="container">
      <h1>User list</h1>
      <Search handleChange={changeText} />
      <CardList users={userList} />
    </div>
  );
}

export default App;
