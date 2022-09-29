import esti from '../../assets/img/esti.png'
import { NavLink } from 'react-router-dom';
import "../../styles/navbar.css";

const Navbar = () => {
    return (
        <div className='sidebar'>
           <header>
                <div className="logo">
                    <img src= { esti } alt="esti" />
                </div>
                <i className="fa-solid fa-chevrons-left"></i>
           </header>

           <div className="menu-bar">
                <div className="menu">
                    <li className="search-box">
                        <h2>Gestion FC</h2>
                    </li>

                    <ul className="menu-links">
                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "/dashboard" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Dash Board</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "secteur" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Secteur</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "catalogue" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Catalogue</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "formation" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Formation</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "commande" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Commande</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "vente" className = {(nav) => nav.isActive ? "active" : ""}>
                                <span className="nav-text">Vente</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                                {/*fontawesome*/}
                            <NavLink to = "calendrier" className = {(nav) => nav.isActive ? "active" : ""}>
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