import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Link,
  CircularProgress, 
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import googleLogo from "../../assets/images/google.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import twitterLogo from "../../assets/images/twiteer.png";

import userLoginImage from "./login_img.png"; 
//import leafIcon from './leaf.png';

function Login() {
  const [loading, setLoading] = useState(false); 
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSocialMediaLogin = (platform) => {
    // You can add logic here to handle the social media login for each platform
    console.log(`Signing up with ${platform}`);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: values.username,
        password: values.password,
      });

      console.log("Login Successful:", response.data);
      setSuccessMessage('Login Successful');
    } catch (error) {
      console.error("Login Failed:", error.message);

       setErrorMessage('Login Failed');
    } finally {
      setLoading(false); 
    }
    console.log("Username:", values.username);
    console.log("Password:", values.password);
  };

  return (
    <Container className="login-container" maxWidth="xs">
      <Paper
        elevation={3}
        className="login-card"
        style={{
          borderRadius: "25px",
          paddingLeft: "40px",
          paddingRight: "40px",
          backgroundColor: "#FFF5EE",
        }}
      >
        {" "}
        {/*style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)'}}*/}
        {/* Add the user login image */}
        <img
          src={userLoginImage}
          alt="User Login"
          style={{ height: "30%", width: "40%" }}
        />
        <Typography
          variant="h5"
          gutterBottom
          marginTop={1}
          style={{
            fontFamily: "Playfair Display, sans-serif",
            color: "#4B0082",
          }}
        >
          <b>User Login</b>
          {/* <img src={leafIcon} alt="Leaf Icon" style={{ width: '36px', height: '36px', marginRight: '8px' }} />*/}
        </Typography>
        <Typography
          variant="h7"
          gutterBottom
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          Hey, Enter your details to get sign in <br /> to your account
        </Typography>
        <form onSubmit={handleSubmit} marginTop={2}>
          <TextField
            label="Useremail"
            fullWidth
            required
            variant="outlined"
            margin="normal"
            type="email"
            value={values.username}
            onChange={handleChange("username")}
            InputProps={{
              style: {
                borderRadius: "20px", // Adjust the border radius as needed
                height: "40px", // Adjust the height as needed
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: "16px",
                // Adjust the font size of the label as needed
              },
            }}
          />
          <TextField
            label="Password"
            fullWidth
            required
            variant="outlined"
            margin="normal"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            InputProps={{
              style: {
                borderRadius: "20px", // Adjust the border radius as needed
                height: "40px", // Adjust the height as needed
              },

              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: {
                fontSize: "16px", 
              },
            }}
          />

          <Typography
            variant="body2"
            align="left"
            style={{
              fontFamily: "Ubuntu, sans-serif",
              marginBottom: "30px",
              marginLeft: "10px", 
            }}
          >
            <span style={{ fontWeight: 300 }}>Having trouble in </span>
            <b>
              <Link href="/signup" style={{ color: "#4B0082" }}>
                <span style={{ fontWeight: 400 }}>Log in?</span>
              </Link>
            </b>
          </Typography>

          <>
      {loading ? (
        <CircularProgress style={{ margin: "20px auto", display: "block" }} />
      ) : (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          style={{
            fontFamily: "Ubuntu, sans-serif",
            backgroundColor: "#4B0082",
            textTransform: "none",
            borderRadius: "20px",
            width: "100%",
          }}
        >
          <span style={{ fontWeight: 300 }}>Log in</span>
        </Button>
      )}

      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage("")}
        message={successMessage}
      />

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={3000}
        onClose={() => setErrorMessage("")}
        message={errorMessage}
      />
    </>

          <div
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              marginRight: "10px",
              fontFamily: "Ubuntu, sans-serif",
            }}
          >
            <Typography variant="body2" align="right">
              <b>
                New User?{" "}
                <Link
                  href="/signup"
                  style={{
                    color: "#4B0082",
                    fontWeight: 300,
                    marginBottom: "30px",
                  }}
                >
                  Sign Up
                </Link>
              </b>
            </Typography>
          </div>

          <Typography
            variant="body2"
            align="center"
            gutterBottom
            marginTop={2.5}
            marginBottom={2.5}
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            <div className="horizontal-line">
              <span className="line-text">Or, Sign in with</span>
            </div>
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              marginBottom: "20px",
            }}
          >
           
            <IconButton onClick={() => handleSocialMediaLogin("Google")}>
              <img
                src={googleLogo}
                alt="Google"
                style={{ width: "36px", height: "36px" }}
              />
            </IconButton>

            <IconButton onClick={() => handleSocialMediaLogin("LinkedIn")}>
              <img
                src={linkedinLogo}
                alt="Linkedin"
                style={{ width: "36px", height: "36px" }}
              />
            </IconButton>


            <IconButton onClick={() => handleSocialMediaLogin("Twitter")}>
              <img
                src={twitterLogo}
                alt="Twiteer"
                style={{ width: "36px", height: "36px" }}
              />
            </IconButton>
          </div>

          <div style={{ marginTop: "15px", marginBottom: "10px" }}>
            <Typography
              variant="body2"
              align="center"
              marginBottom={3}
              style={{ fontSize: "12px", fontFamily: "Ubuntu, sans-serif" }}
            >
              Don't have an account?{" "}
              <b>
                <Link href="/signup" style={{ color: "#4B0082" }}>
                  <span style={{ fontWeight: 300 }}>Request Now </span>
                </Link>
              </b>
            </Typography>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
