// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About  from "./components/About";
import React, {useState} from 'react';
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode has been Enabled", "success");
      // setInterval(() => {
      //   document.title =  "Install TextUtils Now!"
      //   // document.title = "TextUtils - Home"
      // }, 1000);
      // setInterval(() => {
      //   document.title =  "TextUtils Is Amazing!"
      //   // document.title = "TextUtils - Home"
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          {/* /user --> component 1
          /user/home --> component 2 */}
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode}/>}>
            </Route>
          </Routes>
          {/* <TextForm heading="Enter the text to Analyze below" mode={mode}/> */}
            {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
