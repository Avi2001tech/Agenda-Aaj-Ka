import { useState } from "react";
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
  CircularProgress, // Import CircularProgress for the loading spinner
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Signup.css";
import googleLogo from "../../assets/images/google.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import twitterLogo from "../../assets/images/twiteer.png";
import userSignUpImage from "./SignUp.png";

function SignUp() {
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => () => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: values.name,
          email: values.email,
          password: values.password,
        }
      );
      console.log("Signup Successful:", response.data);
      setSuccessMessage("Signup Successful");

    } catch (error) {
      console.error("Signup Failed:", error.message);
      setErrorMessage("Signup Failed");
    } finally {
      setLoading(false); // Stop loading
    }
    console.log("Name:", values.name);
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    console.log("Confirm Password:", values.confirmPassword);
  };

  const handleSocialMediaLogin = (platform) => {
    // You can add logic here to handle the social media login for each platform
    console.log(`Signing up with ${platform}`);
  };

  const commonTextStyle = {
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: 400,
  };

  return (
    <Container className="signup-container" maxWidth="xs">
      <Paper
        elevation={3}
        className="signup-card"
        style={{
          borderRadius: "25px",
          paddingLeft: "40px",
          paddingRight: "40px",
          backgroundColor: "#FFF5EE",
        }}
      >
        {/*backgroundColor: 'rgba(255, 255, 255, 0.3)'*/}
        {/* Add the user login image */}
        <img
          src={userSignUpImage}
          alt="User SignUp"
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
          <b>User SignUp</b>
          {/* <img src={leafIcon} alt="Leaf Icon" style={{ width: '36px', height: '36px', marginRight: '8px' }} />*/}
        </Typography>

        <Typography variant="h7" gutterBottom style={{ commonTextStyle }}>
          Master Your Time, Scheduling Made Simple <br /> - Join Us Today!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            required
            variant="outlined"
            margin="normal"
            value={values.name}
            onChange={handleChange("name")}
            InputProps={{
              style: {
                borderRadius: "20px", // Adjust the border radius as needed
                height: "40px", // Adjust the height as needed
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: "16px", // Adjust the font size of the label as needed
              },
            }}
          />
          <TextField
            label="Email"
            fullWidth
            required
            variant="outlined"
            margin="normal"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            InputProps={{
              style: {
                borderRadius: "20px", // Adjust the border radius as needed
                height: "40px", // Adjust the height as needed
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: "16px", // Adjust the font size of the label as needed
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
                borderColor: "#4B0082",
                borderRadius: "20px", // Adjust the border radius as needed
                height: "40px",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword("showPassword")}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: {
                fontSize: "16px", // Adjust the font size of the label as needed
              },
            }}
          />
          <TextField
            label="Confirm Password"
            fullWidth
            required
            variant="outlined"
            margin="normal"
            type={values.showConfirmPassword ? "text" : "password"}
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            InputProps={{
              style: {
                borderColor: "#4B0082",
                borderRadius: "20px", // Adjust the border radius as needed
                height: "40px",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword("showConfirmPassword")}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: {
                fontSize: "16px", // Adjust the font size of the label as needed
              },
            }}
          />
          <Typography
            variant="body2"
            align="right"
            style={{
              fontFamily: "Ubuntu, sans-serif",
              marginBottom: "30px",
              marginLeft: "10px", // Adjust the margin bottom as needed
            }}
          >
            <span style={{ fontWeight: 300 }}>Having trouble in </span>
            <b>
              <Link href="/signup" style={{ color: "#4B0082" }}>
                <span style={{ fontWeight: 400 }}>Sign Up?</span>
              </Link>
            </b>
          </Typography>
          <>
            {loading ? (
              <CircularProgress
                style={{ margin: "20px auto", display: "block" }}
              />
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
                <span style={{ fontWeight: 300 }}>Sign Up</span>
              </Button>
            )}

            <Snackbar
              open={!!successMessage} // Show when success message is not empty
              autoHideDuration={3000} // Hide after 3 seconds (adjust as needed)
              onClose={() => setSuccessMessage("")} // Close the Snackbar
              message={successMessage}
            />

            {/* Snackbar for displaying error message */}
            <Snackbar
              open={!!errorMessage} // Show when error message is not empty
              autoHideDuration={3000} // Hide after 3 seconds (adjust as needed)
              onClose={() => setErrorMessage("")} // Close the Snackbar
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
            <Typography variant="body2" align="center">
              <b>
                Already have an account?{" "}
                <Link
                  href="/"
                  style={{
                    color: "#4B0082",
                    fontWeight: 300,
                    marginBottom: "30px",
                  }}
                >
                  Log In
                </Link>
              </b>
            </Typography>
          </div>

          {/* New section for social media sign-up */}
          <Typography
            variant="body2"
            align="center"
            gutterBottom
            marginTop={2.5}
            marginBottom={2.5}
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            <div className="horizontal-line">
              <span className="line-text">Or, Sign Up with</span>
            </div>
          </Typography>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom:'20px' }}>
          
            <IconButton onClick={() => handleSocialMediaLogin('Google')} >
              
              <img src={googleLogo} alt="Google" style={{ width: '36px', height: '36px' }} />
            </IconButton>
            
            
         
            <IconButton onClick={() => handleSocialMediaLogin('LinkedIn')}>
              
              <img src={linkedinLogo} alt="Google" style={{ width: '36px', height: '36px' }} />
            </IconButton>
            
           
            <IconButton onClick={() => handleSocialMediaLogin('Twitter')}>
            
              <img src={twitterLogo} alt="Google" style={{ width: '36px', height: '36px' }} />
            </IconButton>

          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default SignUp;
