import './NavBar.css'

function NavBar(){
    return(
<div className='nav'>
    <nav>
        <h1 id='title'><span>S</span>adayu</h1>
        <ul>
        <li><a href="#personal">Home</a></li>
                <li><a href="#skill-tools">Skills</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
</div>
    )
}
export default NavBar