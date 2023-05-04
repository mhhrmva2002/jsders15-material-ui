import { useState } from "react";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
// eslint-disable-next-line react/prop-types
const Login = ({ users, setIsLoggedIn, user, setUser,setRegister }) => {
  let [wrongUser, setWrongUser] = useState(false);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    let userFound = users.find(
      (item) =>
        item.email === user.email && item.password === user.password
    );

    if (userFound === undefined) userFound = false;
    else {
      user.name = userFound.name;
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
      <h1>Sign in</h1>
      <form style={{ width: "100%" }} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          style={{ width: "30%" }}
          id="email"
          label="Email"
          variant="outlined"
          name="email"
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder="email"
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
        {wrongUser ? "wrong email or password" : ""}
      </p>
      <div style={{fontSize:"0.7em"}}><span style={{color:'#2196f3', cursor:"pointer", textDecoration:"underline"}}>Forgot password?</span>
      <span  style={{marginLeft:"100px",color:'#2196f3', cursor:"pointer", textDecoration:"underline"}} onClick={()=>setRegister(true)}>Don't have an account? Sign Up</span>
      </div>
      <p style={{color:"gray"}}>Copyright © Your Website 2023</p>
    </>
  );
};

export default Login;
