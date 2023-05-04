import { useState } from "react";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
// eslint-disable-next-line react/prop-types
const Login = ({ users, setIsLoggedIn, user, setUser }) => {
  let [wrongUser, setWrongUser] = useState(false);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    let userFound = users.find(
      (item) =>
        item.username === user.username && item.password === user.password
    );

    if (userFound === undefined) userFound = false;
    else {
      user.fullName = userFound.fullName;
      userFound = true;
    }
    setIsLoggedIn(userFound);
    if (userFound) {
      setWrongUser(false);
    } else {
      setWrongUser(true);
    }
  }
  return (
    <>
      <h1>Login</h1>
      <form style={{ width: "100%" }} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          style={{ width: "30%" }}
          id="email"
          label="Email"
          variant="outlined"
          name="username"
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="username"
        />
        <br />
        <TextField
          style={{ width: "30%", marginTop: "30px" }}
          id="password"
          label="Password"
          variant="outlined"
          name="password"
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder="password"
        />
        <br />
        <FormControlLabel style={{ width: "30%", marginTop: "30px" }} control={<Checkbox />} label="Remember me" />
        <br />
        <Button
          variant="contained"
          style={{ width: "30%", marginTop: "30px" }}
          type="submit"
        >
          Sign in
        </Button>
      </form>
      <p style={{ color: "red" }}>
        {wrongUser ? "wrong username or password" : ""}
      </p>
      <div>
        <button style={{border:"none",justifyContent:"SpaceBetween"}}><a href="#">Forgot password?</a></button>
        <button style={{border:"none"}}><a href="#">Don't have an account? Sign Up</a></button>
      </div>
      <p style={{color:"gray"}}>Copyright © Your Website 2023</p>
    </>
  );
};

export default Login;
