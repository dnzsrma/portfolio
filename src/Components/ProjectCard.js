import linksvg from "../repo/icons/open-in-new.svg"
import { Parallax } from 'react-scroll-parallax';

function ProjectCard(props) {
  let placeholder = props.content.image;
  const orientation = props.content.orientation;
  let side = "left-card project-card";
  let right = false;
  if(orientation == "right"){
    side = "right-card project-card"
    right = true;
  }

    return (
    <Parallax translateX={right ? ['60px', '-30px'] : ['-60px', '30px']} opacity= {[0.1,1]}>
      <div className={side}>
        <img className="project-card-img" alt="" src={placeholder}></img>
        <div className="project-title-row">
          <h5>{props.content.title}</h5>
          <div style={{display:"flex",flexDirection:"row"}}>
            <a href={props.content.githubLink}><img className="project-card-icon" alt="Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"></img></a>
            <a href={props.content.liveLink}> <img className="project-card-icon" style={{marginLeft:"10px"}} alt="Live site" src={linksvg}></img></a>
          </div>
        </div>
        <p>
        {props.content.description}
        { props.content.assignmentLink &&
          <a href={props.content.assignmentLink}>assignment</a>
        }
        </p>
      </div>
    </Parallax>
    );
  }
  
  export default ProjectCard;