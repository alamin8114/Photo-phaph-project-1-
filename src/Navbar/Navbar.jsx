import "./Navbar.css"
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="alamin-mein-menu">
                <div className="menu-bar">
            <div className="nav-logo">
                <img className="logo-img" src="images/Logo.png" alt="logo img" />
            </div>
            <div className="nav-menu">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
                </div>
            <div className="bar-logo">
            <FaBars className="bar-icon"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar