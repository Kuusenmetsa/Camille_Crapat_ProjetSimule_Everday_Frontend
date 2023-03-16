import "./index.css";
import logo from "../../assets/img/icon-left-font-monochrome-white.svg";

function HeaderHorsCo() {
  return (
    <header className="headerHorsCo">
      <div className="logo">
        <img src={logo} alt="logo d'Everday" />
      </div>
    </header>
  );
}

export default HeaderHorsCo;
