import './Project.css'
import FitClub from '../../assets/BackGround/FitClub.png'
import Jamming from '../../assets/BackGround/jamming.png'
import Colmar from '../../assets/BackGround/COLMAR.png'

function Project(){
    return(
<div id="project-section">
        <h1 id="project">Project</h1>
        <div class="project-box">
            <div class="project1">
                <a href="https://jsd-final-frontend.vercel.app/login" target="_blank">
                    <h1>FIT-Club (Activity Record website)</h1>
                </a>
                <img src={FitClub} />
                <p>FIT-Club website is record activities for exercises such as running, walking, cycling, swimming,
                    and hike users can save data on FIT-Club and view historical data.
                </p>
            </div>

            <div class="project2">
                <a href="https://jamming-two.vercel.app" target="_blank">
                    <h1>Jamming (Playlist App with the Spotify API) </h1>
                </a>
                <img src={Jamming} />
                <p>Jamming is a website users can search for songs or artists and create playlists using React and
                    the Spotify API.
                </p>

            </div>
            <div class="project3">
                <a href="https://colmar-academy-eight.vercel.app" target="_blank">
                    <h1>Colmar Academy (BUILD A WEBSITE WITH HTML, CSS)</h1>
                </a>
                <img src={Colmar} />
                <p>Designing and creating the landing page by making informed design decisions about color and
                    typography using HTML and CSS.</p>

            </div>
        </div>
    </div>
    )
}export default Project