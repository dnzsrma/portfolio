import { Link } from "react-router-dom";
import returnSvg from "../repo/icons/keyboard-return.svg";
import linkedinLogo from "../repo/icons/linkedin-logo.png"

function Contact() {

    return (
      <div style={{height:"fit-content",minHeight:"200px"}} id="Contact">
        <img className="opacity-anim header" alt="header" src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        <h1 className="opacity-anim">Contact</h1>
        <h3 className="opacity-anim" style={{margin:"20px", fontFamily:"Arima" }}>Please get in touch with me if you think our work could be mutually beneficial! </h3>
        <div className="opacity-anim" style={{width:"100%", display:"flex",flexDirection:"column",alignItems:"baseline",justifyContent:"center",marginLeft:"50px"}}>
            <div className="contact-info-row"><img className="icon opacity-anim" alt="Gmail" src="https://icongr.am/material/email.svg?size=32&color=black"></img> <p className="contact-info">dnz.srma@gmail.com</p></div>
            <div className="contact-info-row"><img className="icon opacity-anim" alt="Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"></img><a href="https://github.com/dnzsrma" className="contact-info">dnzsrma</a></div>
            <div className="contact-info-row"><img className="icon opacity-anim" alt="Linked-in" src={linkedinLogo}></img><a href="https://www.linkedin.com/in/deniz-s%C4%B1rma-b2b900206/" className="contact-info">Deniz Sirma</a></div>
        </div>
        <div style={{position:"relative",bottom:"0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderBottomRadius:"inherit",backgroundColor:"var(--theme-darker)",width:"100%",height:"100px",marginTop:"20px"}}>
        <Link to="/about"><button style={{display:"flex",flexDirection:"row",alignItems:"center"}} className="contact-page-btn"><img alt="" style={{height:"16px",width:"16px",marginRight:"10px"}} src={returnSvg}></img>Return</button></Link>
        </div>
      </div>
    );
  }
  
  export default Contact;