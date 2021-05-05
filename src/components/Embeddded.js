import React from "react";
import { Button, Modal } from "react-bootstrap";

const Embeddded = ({ setEmbedded, embedded }) => {
  return embedded ? (
    <Modal show={true} className="bg-secondary dis ">
      <Modal.Header className="bg-dark text-light">Share</Modal.Header>
      <Modal.Body className="text-center bg-light">
        <pre>
          &lt;iframe src=&quot;https://www.youtube.com&quot;
          title=&quot;youtube&quot;&gt;&lt;/iframe&gt;
        </pre>
      </Modal.Body>

      <Modal.Footer className="bg-dark">
        <Button onClick={() => setEmbedded(false)}>Close </Button>
      </Modal.Footer>
    </Modal>
  ) : null;
};

export default Embeddded;
