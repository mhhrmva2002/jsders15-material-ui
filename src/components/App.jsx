import { useState } from "react"
import Welcome from "./Welcome";
import Login from "./Login";
import { users } from "../user"
import { Container } from "@mui/material";
function App() {
  let[isLoggodIn,setIsLoggedIn] = useState(false);
  let[user,setUser] = useState({});

  return (
    <Container style={{textAlign:"center"}}>
          {isLoggodIn ? <Welcome fullname={user.fullName} setIsLoggedIn={setIsLoggedIn}/> : <Login user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} users={users}/>}
    </Container>
  )
}

export default App