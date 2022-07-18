import me from "../repo/Pictures/me.jpg"
import { Link } from "react-router-dom"

function About() {
const aboutme = 
`Hi, my name is Deniz Sırma. I am an economics gradute who is self-learning front end 
development. I started this path, when i realized the jobs i can get with my degree 
were not interesting to me. Instead i found my passion for creating. At first, i went
through Cs50x, which is a computer science course offered by Harvard University. After 
that i learned Android development with Kotlin through several other courses. Finally 
i found Odin project which is an open source online course to learn full-stack programming.
With Js and React.js framework, i found out that front-end development fullfils my passion
for creating.`

    return (
      <div id="About">
        <img style={{objectPosition:"0 30%"}} className="opacity-anim header" alt="header" src="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        <h1 className="opacity-anim">About Me</h1>
        <img className="opacity-anim" style={{marginTop:"30px",height:"128px",width:"128px",objectFit:"cover",borderRadius:"150px",objectPosition:"-50% 50%",border:"5px solid black"}} alt="" src={me}></img>
        <p className="opacity-anim">{aboutme}</p>
        <h3 style={{padding:"0px",margin:"0px"}}>Skills</h3>
        <div id="techstack">
          <img alt="" className="techstack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img alt="" className="techstack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
          <img alt="" className="techstack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
          <img alt="" className="techstack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" />
          <img alt="" className="techstack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img alt="" className="techstack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" />
          <img alt="" className="techstack-icon"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />
          <img alt="" className="techstack-icon"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          <img alt="" className="techstack-icon"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
          <img alt="" className="techstack-icon"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          <img alt="" className="techstack-icon"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg" />
          <img alt="" className="techstack-icon"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
          <img alt="" className="techstack-icon"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />
          <img alt="" className="techstack-icon"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />
        </div>
        <Link to="/projects"><button className="opacity-anim">Projects</button></Link>
        <Link to="/contact"><button style={{marginTop:"0px"}} className="opacity-anim">Contact</button></Link>
      </div>
    );
  }
  
  export default About;