import React from "react";
import { Button, Modal } from "react-bootstrap";

import Clipboard from "react-clipboard.js";
import "./Embed.css";

const Embed = ({ embed, close }) => {
  return embed ? (
    <Modal show={true} className="d-xx-flex  dis">
      <Modal.Header className="">
        <p className="poi ">Embedded Video</p>
        <Button className="float-right btn-light" onClick={() => close(false)}>
          X
        </Button>
      </Modal.Header>
      <hr />
      <br />
      <Modal.Body className="d-flex flex-column">
        {" "}
        <textarea rows={7} columns={9} readOnly id="set">
          &lt;iframe width="560" height="315"
          src="https:&#47;&#47;www.youtube.com&#47;embed&#47;IKc_RH33-uM"
          title="YouTube video player" frameborder="0" allow="accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope;
          picture-in-picture" allowfullscreen&gt;&lt;&#47;iframe&gt;
        </textarea>
        <div className="text-cen">
          <ul className="tex pt-3 ">EMBED OPTIONS</ul>

          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            className="mt-3"
          />

          <label for="vehicle1" className="ml-3">
            Show player controls.{" "}
          </label>
          <br />
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            className="mt-3"
          />

          <label className="position" for="vehicle1" className="ml-3 pok">
            Enable privacy-enhanced mode .{" "}
          </label>
        </div>
        <br />
        <Clipboard
          component="a"
          button-href="#"
          data-clipboard-target="#set"
          style={{
            color: "black",
            margin: "20px",
            "text-decoration": "none",
          }}
          className="d-flex align-items-center justify-content-center bg-light"
        >
          Copy To Clipboard
        </Clipboard>
      </Modal.Body>
    </Modal>
  ) : null;
};

export default Embed;
