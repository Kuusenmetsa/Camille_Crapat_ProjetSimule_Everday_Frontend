import "./index.css";
import logo from "../../assets/img/icon-left-font-monochrome-white.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo de Everday" />
      </div>
      <div className="profile">
        <img src={logo} alt="Photo de profile de l'utilisateur" />
      </div>
    </header>
  );
}

export default Header;
