import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const addNotification = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>Total Notifications: {count}</h1>

      <button onClick={addNotification}>
        Add Notification
      </button>

    </div>
  );
}

export default App;