import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import Clipboard from "react-clipboard.js";

import {
  FacebookIcon,
  WhatsappIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";

import "../Modals/Modal.css";

const Modals = ({ show, closeModalHandler }) => {
  const [url, setUrls] = useState(
    "https://www.youtube.com/watch?v=-t7PgfHHHOw"
  );
  let size = 70;
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <p className="poi">Share</p>
          <span onClick={closeModalHandler} className="close-modal-btn">
            x
          </span>
        </div>
        <div className="modal-body ml-2">
          <a href="https://www.facebook.com">
            <FacebookIcon size={size} round={true} className="on ml-2 mr-2" />
          </a>
          <a href="https://www.whatsapp.com">
            <WhatsappIcon size={size} round={true} className="on ml-2 mr-2" />
          </a>
          <a href="https://www.facebook.com">
            <FacebookMessengerIcon
              size={size}
              round={true}
              className="on ml-2 mr-2"
            />
          </a>
          <a href="https://www.twitter.com">
            <TwitterIcon size={size} round={true} className="on ml-2 mr-2" />
          </a>
          <a href="https://www.reddit.com">
            <RedditIcon size={size} round={true} className="on ml-2 mr-2" />
          </a>
          <a href="https://www.gmail.com">
            <EmailIcon size={size} round={true} className="on ml-3" />
          </a>
        </div>
        <div className="urls">
          <pre>
            <code>
              <pre id="content">{url}</pre>
            </code>
          </pre>

          <Clipboard
            component="a"
            button-href="#"
            data-clipboard-target="#content"
            className="clips"
          >
            Copy
          </Clipboard>
        </div>
      </div>
    </div>
  );
};

export default Modals;
