import React, { useState, useEffect } from 'react';
import WebCam from './components/WebCam';
import './App.css';

function App() {
  const [openCam, setOpenCam] = useState(false);
  useEffect(() => {
    console.log(openCam);    
  });

  return (
    <div className="App">
      <input type="checkbox" value={openCam} onChange={() => setOpenCam(!openCam)} />

      {openCam ? <WebCam /> : null}
    </div>
  );
}

export default App;
