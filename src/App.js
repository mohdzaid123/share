import React, { useState } from "react";

import Popup from "./components/Popup";
import Embedded from "./components/Embeddded";
import Modal from "./components/Modals/Modal";

function App() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);
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
      <Modal show={show} closeModalHandler={closeModalHandler} />
    </div>
  );
}

//   // const [buttonPopup, setButtonPopups] = useState(false);
//   // const [embedded, setEmbedded] = useState(false);

//   // return (
//   //   <div>
//   //     <main className="image1">
//   //       <h1>React Popups</h1>
//   //       <br />
//   //       <br />

//   //       <button
//   //         className="btn btn-primary"
//   //         onClick={() => setButtonPopups(true)}
//   //       >
//   //         Open Popups
//   //       </button>
//   //       <button
//   //         className="btn btn-primary mt-3"
//   //         onClick={() => setEmbedded(true)}
//   //       >
//   //         Embedde video
//   //       </button>
//   //     </main>
//   //     <Popup trigger={buttonPopup} setTrigger={setButtonPopups} />
//   //     <Embedded embedded={embedded} setEmbedded={setEmbedded} />

//     </div>
//   );
// }
export default App;
