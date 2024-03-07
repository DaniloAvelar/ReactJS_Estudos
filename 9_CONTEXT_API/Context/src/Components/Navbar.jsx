import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='Container'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">Sobre</NavLink></li>
            <li><NavLink to="/Contact">Contato</NavLink></li>

        </ul>
    </div>
  )
}

export default Navbar