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
        </ul>

    </nav>
  )
}

export default Nav;