import React from "react";

import Clipboard from "react-clipboard.js";
import "./Embed.css";

const Embed = ({ embed, close }) => {
  return embed ? (
    <div
      style={{ top: "1px", left: "1px", position: "fixed" }}
      class="mainContainer"
    >
      <div class="containerFlex">
        <img class="image" src="https://via.placeholder.com/45x35" alt="box" />
        <div class="containerRight">
          <div class="title">Embedded Graph</div>
          <div class="subTitle">
            Note: We recommend only embeddeding upto five widget on a single
            page.
          </div>
          <textarea cols="30" rows="10" class="textArea" id="area" readOnly>
            &lt;iframe width=&quot;560&quot; height=&quot;315&quot;
            src=&quot;https:&#47;&#47;www.youtube.com&#47;embed&#47;ovgqr3fQ6wg&quot;
            title=&quot;YouTube video player&quot; frameborder=&quot;0&quot;
            allow=&quot;accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture&quot;
            allowfullscreen&gt;&lt;&#47;iframe&gt;
          </textarea>
          <div className="buttonParent">
            <div className="button" type="button" onClick={close}>
              No,Thanks
            </div>

            <div className="button1">
              <Clipboard
                component="a"
                style={{ textDecoration: "none", color: "#000" }}
                data-clipboard-target="#area"
              >
                Copy
              </Clipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Embed;
