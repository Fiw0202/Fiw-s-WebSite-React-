import "./Skills.css";
import Html from "../../assets/Icon/HTML5.png";
import Css from "../../assets/Icon/CSS.png";
import JsIm from "../../assets/Icon/Js.png";
import NodeJS from "../../assets/Icon/node.png";
import React from "../../assets/Icon/REACT.png";
import Express from "../../assets/Icon/Express.png";
import MongoDB from "../../assets/Icon/MongoDB.png";
import VsCode from "../../assets/Icon/Vscode.png";
import Git from "../../assets/Icon/Git.png";
import GitHub from "../../assets/Icon/Github.png";
import Figma from "../../assets/Icon/Figma-logo.svg";

function Skills() {
  return (
    <div id="skill-tools">
      <div class="skill">
        <h1 id="skillH">Skills</h1>
        <div class="skill-icon">
          <figure>
            <img src={Html} />
            <figcaption>HTML5</figcaption>
          </figure>
          <figure>
            <img src={Css} />
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            <img src={JsIm} />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure>
            <img src={NodeJS} />
            <figcaption>NodeJS</figcaption>
          </figure>
          <figure>
            <img src={React} />
            <figcaption>REACT</figcaption>
          </figure>
          <figure>
            <img src={Express} />
            <figcaption>Express</figcaption>
          </figure>
          <figure>
            <img src={MongoDB} />
            <figcaption>MongoDB</figcaption>
          </figure>
        </div>
      </div>
      <div class="tools">
        <h1 id="toolsH">Tools</h1>
        <div class="tools-icon">
          <figure>
            <img src={VsCode} />
            <figcaption>VScode</figcaption>
          </figure>
          <figure>
            <img src={Git} />
            <figcaption>Git</figcaption>
          </figure>
          <figure>
            <img src={GitHub} />
            <figcaption>Git Hub</figcaption>
          </figure>
          <figure>
            <img src={Figma} />
            <figcaption>Figma</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
export default Skills;
