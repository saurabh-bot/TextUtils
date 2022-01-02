import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {setAlert(null)}, 2000);
  }

  const dark = '#011838';
  const light = 'white';

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = dark;
      showAlert('Dark mode has been enabled', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = light;
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
      
      </Router>
    
  );
}

export default App;
