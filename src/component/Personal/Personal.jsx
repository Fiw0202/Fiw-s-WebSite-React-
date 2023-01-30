import "./Personal.css";
import MySelf from "../../assets/mySelf.jpg"

function Personal() {
  return (
    <div id="personal">
      <div class="personal-left">
        <div class="personal-name">
          <h1 id="first-let">S</h1>
          <h1>
            adayu
            <br />
            amrit
          </h1>
        </div>
        <div class="box-p">
          <p id="personal-p">
            I am fresh graduated with a Computer Education major. I have web
            development experience using HTML, CSS, JavaScript, and MERN stack.
            I am committed, learning new things, responsible and teamwork. I can
            work in Agile and Scrum environments. I am looking for a job
            position as a junior web developer I can use these skills to improve
            myself and work for the company I work for.
          </p>
          <a href="/src/assets/SADAYU_CV.pdf" target="_blank" id="Resumebtn">
            <h3>Download CV</h3>
          </a>
        </div>
      </div>
      <div class="personal-right">
        <img src={MySelf} alt="mypic" id="mypic" />
      </div>
    </div>
  );
}
export default Personal;
