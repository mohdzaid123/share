import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  FacebookIcon,
  WhatsappIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";

import "./Popup.css";

function Popup(props) {
  let size = 60;
  const [url, serUrl] = useState("https://www.youtube.com/");
  return props.trigger ? (
    <div className="con">
      <Modal show={true} className="bg-secondary dis">
        <div>
          <Modal.Header className="bg-dark text-light">
            Share
            <div
              className="float-left on"
              onClick={() => props.setTrigger(false)}
            >
              <img src="./cancel.png" alt="cancel" />
            </div>
          </Modal.Header>
        </div>

        <Modal.Body className="text-center bg-dark">
          <a href="https://www.facebook.com">
            <FacebookIcon size={size} round={true} className="on" />
          </a>
          <a href="https://www.whatsapp.com">
            <WhatsappIcon size={size} round={true} className="on" />
          </a>

          <a href="https://www.facebook.com/messenger/">
            <FacebookMessengerIcon size={size} round={true} className="on  " />
          </a>
          <a href="https://www.reddit.com">
            <RedditIcon size={size} round={true} className="on" />
          </a>
          <a href="https://www.gmail.com/">
            <EmailIcon size={size} round={true} className="on" />
          </a>

          <a href="https://www.twitter.com">
            <TwitterIcon size={size} round={true} className="on" />
          </a>
          <br />
          <br />
          <br />
          <br />

          <input
            type="text"
            value={url}
            readOnly
            className="float-left bg-dark text-light"
          />
          <CopyToClipboard text={url}>
            <button className="btn btn-secondary ml-2 bg-dark float-right">
              Copy
            </button>
          </CopyToClipboard>
        </Modal.Body>
      </Modal>
    </div>
  ) : (
    ""
  );
}

export default Popup;

// https://www.storenama.in/productdetail/607430a13dcc6c53d567699e#0
