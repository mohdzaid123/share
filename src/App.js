import { useState } from "react";

import Popup from "./components/Popup";

function App() {
  const [buttonPopup, setButtonPopups] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <br />
        <br />
        <button
          className="btn btn-primary"
          onClick={() => setButtonPopups(true)}
        >
          Open Popups
        </button>
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopups}></Popup>
    </div>
  );
}

export default App;
