import '../css/nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="mainNav">
        <h1>Jason Wong</h1>

        <ul className='navList'>
          <li>
            <Link to={{ pathname: "/"}}>Home  </Link>
          </li>
          <li>
            <Link to={{ pathname: "/about"}}>About  </Link>
          </li>
          <li>
            <a href="https://github.com/jw287962">Github</a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jason-wong-a796a2175/">Linkedin</a> 
          </li>
          
        </ul>

    </nav>
  )
}

export default Nav;