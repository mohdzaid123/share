import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Popup(props) {
  const [text, setText] = useState("start");

  return props.trigger ? (
    <Modal show={true} className="bg-secondary">
      <Modal.Header className="bg-dark text-light">Share</Modal.Header>
      <Modal.Body className="text-center bg-dark">
        <a href="https://www.youtube.com" className="ml-3">
          <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
        </a>
        <a href="https://www.twitter.com" className="ml-3">
          <FontAwesomeIcon icon={faTwitter} size="2x" color="light-blue" />
        </a>
        <a href="https://www.instagram.com" className="ml-3">
          <FontAwesomeIcon icon={faInstagram} size="2x" color="#833AB4" />
        </a>
        <a href="https://www.facebook.com" className="ml-3">
          <FontAwesomeIcon icon={faFacebook} size="2x" color="blue" />
        </a>
        <a
          href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Drm%26ogbl&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
          className="ml-3"
        >
          <FontAwesomeIcon icon={faGoogle} size="2x" color="blue" />
        </a>
        <br />
        <input
          name="firstName"
          onChange={(e) => setText(e.target.value)}
          className="mr-2"
        />
        <div className="container">
          <CopyToClipboard text={text}>
            <button className="btn btn-secondary mt-2">
              Copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button onClick={() => props.setTrigger(false)}>Close </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    ""
  );
}

export default Popup;
