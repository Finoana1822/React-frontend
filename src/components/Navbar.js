import esti from '../assets/esti.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sidebar'>
           <header>
                <div className="logo">
                    <img src= { esti } alt="esti" />
                </div>
                <i class="fa-solid fa-chevrons-left"></i>
           </header>

           <div className="menu-bar">
                <div className="menu">
                    <li className="search-box">
                        <h2>Gestion FC</h2>
                    </li>

                    <ul className="menu-links">
                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Dash Board</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Secteur</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Catalogue</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Formation</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Commande</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Vente</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Calendrier</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
           </div>
        </div>
    );
}
 
export default Navbar;