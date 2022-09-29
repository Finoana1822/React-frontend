import esti from '../assets/esti.png'

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
                        {/*fontawesome*/}
                        <input type="text" placeholder='Search ...'/>
                    </li>

                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="">
                                {/*fontawesome*/}
                                <span className="nav-text">Accueil</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="">
                                {/*fontawesome*/}
                                <span className="nav-text">Secteur</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="">
                                {/*fontawesome*/}
                                <span className="nav-text">Catalogue</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="">
                                {/*fontawesome*/}
                                <span className="nav-text">Formation</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="">
                                {/*fontawesome*/}
                                <span className="nav-text">Vente</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="">
                                {/*fontawesome*/}
                                <span className="nav-text">Commande</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="">
                                {/*fontawesome*/}
                                <span className="nav-text">Statistique</span>
                            </a>
                        </li>
                    </ul>
                </div>
           </div>
        </div>
    );
}
 
export default Navbar;