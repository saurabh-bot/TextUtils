import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {setAlert(null)}, 1500);
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
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/> 
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
