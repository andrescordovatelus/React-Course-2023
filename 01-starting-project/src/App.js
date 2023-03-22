import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandlerV = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandlerV}/>
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
