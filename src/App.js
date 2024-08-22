import './App.css';
import React,{useState} from'react';

function App() {
  let [switcher,setSwitcher]=useState(false);
  const themeSwitch = () => {
    setSwitcher(!switcher);
  };
  return (
    <div className={`App ${switcher ? 'dark' : 'light'}`}>
      <button className="btn" onClick={themeSwitch}>
        Change Theme
      </button>
    </div>
  );

}

export default App;
