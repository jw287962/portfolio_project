import '../css/nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="mainNav">
        <h1>Jason Wong</h1>
        <Link >
          <about></about>
        </Link>


    </nav>
  )
}

export default Nav;