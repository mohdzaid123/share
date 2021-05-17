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

import "../Modals/Modal.css";

const Modals = ({ show, closeModalHandler }) => {
  let size = 60;
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
          <p>Share</p>
          <span onClick={closeModalHandler} className="close-modal-btn">
            x
          </span>
        </div>
        <div className="modal-body ml-2">
          <a href="https://www.facebook.com">
            <FacebookIcon size={size} round={true} className="on ml-2 mr-2" />
          </a>
          <a href="https://www.facebook.com">
            <WhatsappIcon size={size} round={true} className="on ml-2 mr-2" />
          </a>
          <a href="https://www.facebook.com">
            <FacebookMessengerIcon
              size={size}
              round={true}
              className="on ml-2 mr-2"
            />
          </a>
          <a href="https://www.facebook.com">
            <TwitterIcon size={size} round={true} className="on ml-2 mr-2" />
          </a>
          <a href="https://www.facebook.com">
            <RedditIcon size={size} round={true} className="on ml-2 mr-2" />
          </a>
          <a href="https://www.facebook.com">
            <EmailIcon size={size} round={true} className="on ml-2 " />
          </a>
        </div>
      </div>

      <div className="modal-footer">
        <button onClick={closeModalHandler} className="btn-cancel">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modals;
