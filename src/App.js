import "./App.css";
import About from "./components/About";
import MyName from "./components/MyName";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";

let name = "Sandy";

function App() {
  const [mode, setMode] = useState("light");
  const cls = null;

  const removeAllClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
  };

  const toggleMode = (cls) => {
    removeAllClasses();

    if (cls !== null) {
      // Add cls background
      document.body.classList.add("bg-" + cls);
      console.log("Adding " + cls + " background!!");
    } else {
      if (mode === "light") {
        console.log("Changing to dark mode");
        setMode("dark");
        document.body.style.background = "#042743";
        showAlert("Dark mode has been enabled", "success");
        document.title = "TextUtils - Dark";
        document.body.style.color = "white";
      } else {
        console.log("Changing to light mode");
        setMode("light");
        document.body.style.background = "white";
        showAlert("Light mode has been enabled", "success");
        document.title = "TextUtils - Light";
        document.body.style.color = "black";
      }
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <MyName myName={name} mode={mode} cls={cls}></MyName>

        {/* <About/> */}

        {/* We should always use "exact" because Route follow partial matching of links */}
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm mode={mode} showAlert={showAlert} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
