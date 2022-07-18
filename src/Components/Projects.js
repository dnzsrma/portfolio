import ProjectCard from "./ProjectCard";
import project1Img from "../repo/Pictures/project-images/anime-ss.png"
import project2Img from "../repo/Pictures/project-images/cart-ss.png"
import project3Img from "../repo/Pictures/project-images/memory-ss.png"
import project4Img from "../repo/Pictures/project-images/weather-ss.png"
import project5Img from "../repo/Pictures/project-images/battleship-ss.png"
import project6Img from "../repo/Pictures/project-images/tictactoe-ss.png"
import down from "../repo/icons/down.svg"
import { Link } from "react-router-dom";

function Projects() {
  const projects = {
    project1 :{
      image: project1Img,
      description: "React project inspired by myanimelist.net, anilist.co, kitsu.io. Uses Firebase as Back-end, fetches data from kitsu api. ",
      title: "Anime site clone",
      liveLink: "https://dnzsrma.github.io/anime-clone/",
      githubLink : "https://github.com/dnzsrma/anime-clone/tree/main",
      orientation:"left"
    },
    project2 :{
      image: project2Img,
      description: "Simple e-commerce site made with React for the ",
      title: "Shopping cart",
      liveLink: "https://dnzsrma.github.io/shopping-cart",
      githubLink : "https://github.com/dnzsrma/shopping-cart/tree/main",
      assignmentLink :"https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart",
      orientation:"right"
    },
    project3 :{
      image: project3Img,
      description: "Simple memory card game made with react and ygoprodeck api, the goal is to not click the same card twice , for this ",
      title: "Memory Card Game",
      liveLink: "dnzsrma.github.io/memory-card-game/",
      githubLink : "https://github.com/dnzsrma/memory-card-game",
      assignmentLink :"https://www.theodinproject.com/lessons/node-path-javascript-memory-card",
      orientation:"left"
    },
    project4 :{
      image: project4Img,
      description: "Weather app input fetching data from openweather api. Made for ",
      title: "Weather app",
      liveLink: "dnzsrma.github.io/weather",
      githubLink : "https://github.com/dnzsrma/weather",
      assignmentLink :"https://www.theodinproject.com/lessons/node-path-javascript-weather-app",
      orientation:"right"
    },
    project5 :{
      image: project5Img,
      description: "Overly simplistic Battleship game mechanics. First screen lets user put their ships on their board. Then user and computer play against each other to find each other's game location. If there are ships in the hit spot button turns green, else red. Project for ",
      title: "Battleship",
      liveLink: "dnzsrma.github.io/battleship/",
      githubLink : "https://github.com/dnzsrma/battleship",
      assignmentLink :"https://www.theodinproject.com/lessons/node-path-javascript-battleship",
      orientation:"left"
    },
    project6 :{
      image: project6Img,
      description: "Two person Tic Tac Toe game. Made for this ",
      title: "Tic Tac Toe",
      liveLink: "dnzsrma.github.io/tictactoev2",
      githubLink : "https://github.com/dnzsrma/tictactoev2",
      assignmentLink :"https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe",
      orientation:"right"
    },

  }
    

    return (
      <div id="Projects">
        <img className="opacity-anim header" alt="header" src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        <h1 className="opacity-anim">Projects</h1>
        <h2 style={{margin:"10px"}}>Scroll down to check my projects!</h2>
        <img id="down-btn" alt="" style={{width:"32px",height:"32px"}} src={down}></img>
        <ProjectCard content = {projects.project1}/>
        <ProjectCard content = {projects.project2}/>
        <ProjectCard content = {projects.project3}/>
        <ProjectCard content = {projects.project4}/>
        <ProjectCard content = {projects.project5}/>
        <ProjectCard content = {projects.project6}/>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderBottomRadius:"inherit",backgroundColor:"var(--theme-darker)",width:"100%",height:"fit-content",marginTop:"20px"}}>
          <Link to="/about"><button className="projects-page-btn">About Me!</button></Link>
          <Link to="/contact"><button style={{marginBottom:"20px"}} className="projects-page-btn">Contact Me!</button></Link>
        </div>
      </div>
    );
  }
  
  export default Projects;