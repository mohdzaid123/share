import { useState } from "react";

import Popup from "./components/Popup";
import Embedded from "./components/Embeddded";

function App() {
  const [buttonPopup, setButtonPopups] = useState(false);
  const [embedded, setEmbedded] = useState(false);

  return (
    <div className="App">
      <main className="image1">
        <h1>React Popups</h1>
        <br />
        <br />

        <button
          className="btn btn-primary"
          onClick={() => setButtonPopups(true)}
        >
          Open Popups
        </button>
        <button
          className="btn btn-primary mt-3"
          onClick={() => setEmbedded(true)}
        >
          Embedde video
        </button>
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopups} />
      <Embedded embedded={embedded} setEmbedded={setEmbedded} />
    </div>
  );
}

export default App;
