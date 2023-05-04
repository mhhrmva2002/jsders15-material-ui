import { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import { users } from "../user";
import { Container } from "@mui/material";
function App() {
  const [usersState, setUsersState] = useState(users);
  let [isLoggodIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState({});
  let [register, setRegister] = useState(false);

  return (
    <Container style={{ textAlign: "center" }}>
      {isLoggodIn ? (
        <Welcome name={user.name} setIsLoggedIn={setIsLoggedIn} />
      ) : register ? (
        <Register
          user={user}
          setUser={setUser}
          usersState={usersState}
          setUsersState={setUsersState}
          setRegister={setRegister}
        />
      ) : (
        <Login
          user={user}
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
          users={usersState}
          setRegister={setRegister}
        />
      )}
    </Container>
  );
}

export default App;
