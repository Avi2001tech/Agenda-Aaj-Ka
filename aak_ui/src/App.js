import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login/Login";
import SignUp from "./auth/SignUp/Signup";
import Navbar from "./Navbar/Navbar";
import LeftImage from "./assets/images/LeftImage.png";
import RightImage from "./assets/images/RightImage.png";
import { Typography } from "@mui/material";

// App.js without Images i.e left and right

// function App() {
//   return (
//     <Router>
//       <div>
//       <Navbar />
//         <Routes>
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="image-section">
          <div className="image-container-left">
            <img src={LeftImage} alt="left img" />
          </div>

          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Login />} />
          </Routes>

          <div className="image-container-right">
            <img src={RightImage} alt="right img" />
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Typography
            variant="body2"
            align="center"
            style={{ fontSize: "16px", fontFamily: "Ubuntu, sans-serif" }}
          >
            <b>&copy; Avidevops 2023 | Privacy policy</b>
          </Typography>
        </div>
      </div>
    </Router>
  );
}

export default App;
