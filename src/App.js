import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //Weateher darkmode is enabled or not...

  const [alert, setAlert] = useState(null);
  const removeClass = () => {
    document.body.removeAttribute("class");
  };
  const toggleMode = () => {
    removeClass();
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#082370";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
      <>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
            {/* <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below:-" mode={mode}/>} />
            </Routes> */}
            <TextForm showAlert = {showAlert} heading = "Enter yoyr text below:- " mode={mode}/>
        </div>
      </>
  );
}

export default App;
