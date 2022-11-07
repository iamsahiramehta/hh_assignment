import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

const Login = () => {
  let navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    let data = JSON.stringify({
      password: password,
      email: email,
    });

    axios
      .post("http://localhost:1234/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("isLoggedIn", true);
        return navigate("/");
      })
      .catch((err) => {
        console.log("some error", err);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <img src="https://files.hubhopper.com/assets/icons/demand-round/demand-round-72x72.ico" />
          <h2>Sign In</h2>
        </Grid>

        <TextField
          label="Email"
          placeholder="Enter email"
          variant="outlined"
          fullWidth
          required
          style={{ marginBottom: "20px" }}
          onChange={handleUserEmailChange}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography>
          Don't have an account ?<Link href="/register">Register</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
