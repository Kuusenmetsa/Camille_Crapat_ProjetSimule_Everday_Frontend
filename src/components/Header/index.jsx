import "./index.css";
import logo from "../../assets/img/icon-left-font-monochrome-white.svg";

import profileTest from "../../assets/img/profile.jpg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo de Everday" />
      </div>
      <div className="profile">
        <img src={profileTest} alt="profile de l'utilisateur" />
      </div>
    </header>
  );
}

export default Header;
