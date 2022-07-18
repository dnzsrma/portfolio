import { Link } from "react-router-dom";

function Main() {




    return (
      <div id="Main">
        <h1 className="main-title" >DENIZ <span>SIRMA</span> </h1>
        <h2 className="main-title" >Front-end web developer</h2>
        <Link to="/about"><button>Learn more about me!</button></Link>
      </div>
    );
  }
  
  export default Main;