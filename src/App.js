import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import OtpPage from "./components/OTPpage/OtpPage";
import SuccessPage from "./components/Success-Login/Success";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/otp" element={<OtpPage />}></Route>
          <Route path="/success" element={<SuccessPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
