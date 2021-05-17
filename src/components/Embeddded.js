import React from "react";
import { Button, Modal } from "react-bootstrap";

import Clipboard from "react-clipboard.js";
import "../components/Embedded.css";

const Embeddded = ({ setEmbedded, embedded }) => {
  return embedded ? (
    <Modal show={true} className="bg-secondary dis">
      <Modal.Header className="bg-dark text-light">
        <p className="poi">Share</p>
        <Button
          className="float-right  btn-dark"
          onClick={() => setEmbedded(false)}
        >
          X
        </Button>
      </Modal.Header>
      <Modal.Body className="text-center bg-dark">
        <div class="wrapper bg-dark">
          <pre>
            <code>
              <pre id="content">
                &lt;iframe width=&quot;560&quot; height=&quot;315&quot;
                src=&quot;https:&#47;&#47;www.youtube.com&#47;embed&#47;IKc_RH33-uM&quot;
                title=&quot;YouTube video player&quot; frameborder=&quot;0&quot;
                allow=&quot;accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture&quot;
                allowfullscreen&gt;&lt;&#47;iframe&gt;
              </pre>
            </code>
          </pre>
        </div>
        <Clipboard
          component="a"
          button-href="#"
          data-clipboard-target="#content"
        >
          <Button className="float-right btn-dark">Copy</Button>
        </Clipboard>
      </Modal.Body>
    </Modal>
  ) : null;
};

export default Embeddded;
