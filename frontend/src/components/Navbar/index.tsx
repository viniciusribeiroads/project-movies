import { GoMarkGithub } from "react-icons/go";
import './styles.css';

function Navbar(){
    return(

    
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href='https://github.com/viniciusribeiroads'>
            <div>
            <GoMarkGithub/>/viniciusribeiroads
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
  
}

export default Navbar;