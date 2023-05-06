import "./index.css";
import logo from "../../assets/img/icon-left-font-monochrome-white.svg";

import profileTest from "../../assets/img/profile.jpg";

import { NavContext } from "../../utils/context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
  const { nav, actionNav } = useContext(NavContext);
  return (
    <header className="header">
      <div className="blockHeader">
        <div className="logo">
          <img src={logo} alt="Logo de Everday" />
        </div>
        <div className="profile" onClick={() => actionNav()}>
          <img src={profileTest} alt="profile de l'utilisateur" />
        </div>
      </div>

      {nav && (
        <nav>
          <ul>
            <li>
              <Link to="/allposts">Accueil</Link>
            </li>
            <li>
              <Link to="/*">Voir mon profil</Link>
            </li>
            <li>
              <Link to="/*">Paramètres</Link>
            </li>
            <li>
              <Link to="/">Se déconnecter</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
