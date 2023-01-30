import './Contact.css'
// import IconGit from '../../../public/Icon/Github.png' 
// import LinkedIn from '../../../public/Icon/linkedin.png' 

function Contact(){
    return(
<div id="contact">
        <h1 id="contactH">Contact</h1>
        <div class="contact-box">
            <div class="contact-left">
                <h1>Sadayu Samrit</h1>
                <p>Tel. : 086-4814126</p>
                <p>E-mail : Sadayu.samrit@gmail.com</p>
            </div>
            <div class="contact-right">
                <a href="https://github.com/Fiw0202">
                    {/*<img src={IconGit} title="GitHub"/>*/}
                </a>
                <a href="https://www.linkedin.com/in/sadayu-samrit/">
                {/*<img src={LinkedIn} title="Linkedin"/>*/}
            </a>
            </div>
        </div>
    </div>

    )
}export default Contact