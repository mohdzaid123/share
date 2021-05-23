import React, { useState } from "react";


import Modal from "./components/Modals/Modal";
import Embed from "./components/Modals/Embed";

function App() {
  const [show, setShow] = useState(false);
  const [embedded, setEmbedded] = useState(false);

  const closeModalHandler = () => setShow(false);
  const closeEmbedded = () => setEmbedded(false);

  return (
    <div>
      {show ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <button
        onClick={() => {
          setShow(true);
        }}
        className="btn-openModal"
      >
        Open Modal
      </button>

      <button
        onClick={() => {
          setEmbedded(true);
        }}
        className="btn-openModal"
      >
        Open Modal
      </button>
      <Modal show={show} closeModalHandler={closeModalHandler} />

      <Embed embed={embedded} close={closeEmbedded} />
    </div>
  );
}

export default App;

// {embedded ? (
//   <div onClick={closeEmbedded} className="back-drop"></div>
// ) : null}
