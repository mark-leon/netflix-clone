import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./login.css";

const useStyles = makeStyles({
  textField: {
    background: "#333",
    width: "70%",
    borderRadius: "5px",
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <div className="form-box">
      <div className="header-text">Sign In</div>
      <div style={{ textAlign: "center" }}>
        <TextField
          className={classes.textField}
          id="filled-basic"
          label="Email or phone number"
          variant="filled"
          InputLabelProps={{
            style: { color: "#8c8c8c" },
          }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <TextField
          className={classes.textField}
          id="filled-basic"
          label="Password"
          variant="filled"
          InputLabelProps={{
            style: { color: "#8c8c8c" },
          }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button
          variant="contained"
          style={{
            color: "#fafafa",
            background: "#E50A13",
            textTransform: "none",
            width: "70%",
            padding: "10px 0px 10px 0px",
          }}
        >
          Sign in
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#737373",
          padding: "1rem 4rem 0rem 4rem",
        }}
      >
        <div>
          <input type="checkbox" value="password" />
          <label for="remember">Remember Me?</label>
        </div>

        <div>
          <label for="support">Need Help?</label>
        </div>
      </div>
      <div style={{ color: "#737373", padding: "70px 4rem 0rem 4rem" }}>
        <p>
          New to Netflix? <span style={{ color: "#FFF8E9" }}>Sign up now</span>
        </p>
        <p style={{ fontSize: "0.8rem" }}>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span style={{ color: "#0363A5" }}> Learn more</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
