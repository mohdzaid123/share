import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

import facebook from "../components/img/facebook.svg";
import youtube from "../components/img/youtube.svg";
import gmail from "../components/img/gmail.svg";
import instagram from "../components/img/instagram.svg";
import twitter from "../components/img/twitter.svg";
import bloggers from "../components/img/blogger.svg";
import reddit from "../components/img/reddit.svg";

import "./Popup.css";

function Popup(props) {
  const [url, serUrl] = useState("https://www.youtube.com/");
  return props.trigger ? (
    <div className="container con">
      <Modal show={true} className="bg-secondary dis ">
        <Modal.Header className="bg-dark text-light">Share</Modal.Header>
        <Modal.Body className="text-center bg-dark">
          <a href="https://www.youtube.com" className="ml-3 fb">
            <img src={youtube} alt="facebook.png" />
          </a>
          <a href="https://www.twitter.com" className="ml-3 fb">
            <img src={twitter} alt="twitter.png" />
          </a>
          <a href="https://www.instagram.com" className="ml-3 fb">
            <img src={instagram} alt="instagram.png" />
          </a>
          <a href="https://www.facebook.com" className="ml-3 fb">
            <img src={facebook} alt="facebook.png" />
          </a>
          <a
            href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Drm%26ogbl&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            className="ml-3 fb"
          >
            <img src={gmail} alt="gmail.png" />
          </a>
          <a href="https://www.reddit.com/" className="ml-3 fb">
            <img src={reddit} alt="reddit.png" />
          </a>
          <a href="https://www.blogger.com/" className="ml-3 fb">
            <img src={bloggers} alt="blogger.png" />
          </a>

          <br />
          <hr />
          <div className="container">
            <input type="text" value={url} readOnly />
            <CopyToClipboard text={url}>
              <button className="btn btn-secondary ml-2">
                Copy to clipboard
              </button>
            </CopyToClipboard>
          </div>
        </Modal.Body>

        <Modal.Footer className="bg-dark">
          <Button onClick={() => props.setTrigger(false)}>Close </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ) : (
    ""
  );
}

export default Popup;

// https://www.storenama.in/productdetail/607430a13dcc6c53d567699e#0
