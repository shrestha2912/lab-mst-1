import React, { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  const addNotification = () => {
    setCount(count + 1);
  };

  const resetNotification = () => {
    setCount(0);
  };

  return (
    <div className="container">

      <header className="header">
        <h1> Notification System</h1>
        <h2>Total Notifications: {count}</h2>
      </header>

      <div className="buttons">

        <button className="addBtn" onClick={addNotification}>
          Add Notification
        </button>

        <button className="resetBtn" onClick={resetNotification}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;