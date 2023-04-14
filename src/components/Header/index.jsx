import "./index.css";
import logo from "../../assets/img/icon-left-font-monochrome-white.svg";

import profileTest from "../../assets/img/profile.jpg";

import { NavContext } from "../../utils/context";
import { useContext } from "react";

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
            <li>Accueil</li>
            <li>Voir mon profil</li>
            <li>Paramètres</li>
            <li>Se déconnecter</li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
