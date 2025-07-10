import React from "react"; 
import '../styles/Navbar.css'; 
import { NavLink  } from "react-router-dom";  



const NavBar = () => {
    return (
        <nav className = "navbar">
            <ul className="navigation-list">
                <li className="nav-item">
                    <a href="/profile" className="nav-link">Profile</a></li>
                    <li className="nav-item">
                        <a href="/library" className="nav-link">Library</a></li>
                    
                        
                        <li className="nav-item contact">
                            <NavLink to = "/contacts" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}` 
                            }
                            > Contactos 
                            </NavLink></li>
                            <li className="nav-item">
                        <a href="/" className="nav-link">Log Out</a></li>
                        </ul> 
        </nav>
    )
}

export default NavBar;