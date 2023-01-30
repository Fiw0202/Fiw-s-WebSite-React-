import "./Skills.css";
// import Html from '../../../public/Icon/HTML5.png'
// import Css from '../../../public/Icon/CSS.png'
// import JavaScript from '../../../public/Icon/Js.png'
// import NodeJS from '../../../public/Icon/Node.png'
// import React from '../../../public/Icon/REACT.png'
import Express from '../../../public/Icon/Express.png'
import MongoDB from '../../../public/Icon/MongoDB.png'
import VsCode from '../../../public/Icon/Vscode.png'
import Git from '../../../public/Icon/Git.png'
import GitHub from '../../../public/Icon/Github.png'
 import Figma from '../../../public/Icon/Figma-logo.svg'


function Skills() {
  return (
    <div id="skill-tools">
      <div class="skill">
        <h1 id="skillH">Skills</h1>
        <div class="skill-icon">
          <figure>
            {/*<img src={Html} alt="HTML" />*/}
            <figcaption>HTML5</figcaption>
          </figure>
          <figure>
            {/*<img src={Css} alt="CSS"/>*/}
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            {/*<img src={JavaScript} />*/}
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure>
            {/*<img src={NodeJS} />*/}
            <figcaption>NodeJS</figcaption>
          </figure>
          <figure>
            {/*<img src={React} />*/}
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
            <img src={VsCode} alt="VsCode" />
            <figcaption>VScode</figcaption>
          </figure>
          <figure>
            <img src={Git}/>
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
export default Skills
