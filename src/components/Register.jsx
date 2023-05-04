import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";

function Register({ user, setUser, usersState, setUsersState, setRegister }) {
    const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  function handleAddUser(e) {
    e.preventDefault();
    if (
        password !== cpassword
    ) {
      alert("Password and confirm password are not the same!");
    } else {
      setUsersState([...usersState, user]);
      setUser({
        id: uuidv4(),
        name: "",
        username: "",
        password: "",
      });
      setRegister(false);
    }
    // console.log(usersState)
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h1>Register</h1>
      <form style={{ width: "100%" }} onSubmit={(e) => handleAddUser(e)}>
        <TextField
          style={{ width: "30%" }}
          id="name"
          label="Name"
          variant="outlined"
          name="name"
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="name"
          required
        />
        <br />
        <TextField
          style={{ width: "30%", marginTop: "30px" }}
          id="username"
          label="Username"
          variant="outlined"
          name="username"
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="username"
          required
        />
        <br />
        <TextField
          style={{ width: "30%", marginTop: "30px" }}
          id="email"
          label="Email"
          variant="outlined"
          name="email"
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder="email"
          required
        />
        <br />
        <TextField
          style={{ width: "30%", marginTop: "30px" }}
          id="password"
          label="Password"
          variant="outlined"
          name="password"
          onChange={(e) => {
            handleChange(e)
            setPassword(e.target.value)
        }}
          type="password"
          placeholder="password"
          required
        />
        <br />
        <TextField
          style={{ width: "30%", marginTop: "30px" }}
          id="cpassword"
          label="Confirm password"
          variant="outlined"
          name="cpassword"
          onChange={(e) => {
            handleChange(e)
            setCpassword(e.target.value)
        }}
          type="password"
          placeholder="Confirm password"
          required
        />
        <br />
        <FormControlLabel
          style={{ width: "30%", marginTop: "30px" }}
          control={<Checkbox />}
          label="Remember me"
        />
        <br />
        <Button
          variant="contained"
          style={{ width: "30%", marginTop: "30px" }}
          type="submit"
        >
          Register
        </Button>
      </form>
    </>
  );
}

export default Register;
