import "./index.css";

import Header from "../../components/HeaderHorsCo";

import { ToastsContext } from "../../utils/context";
import { useContext } from "react";

function Home() {
  const { saveToasts } = useContext(ToastsContext);
  function connexion() {
    saveToasts(
      "false",
      "L'application est actuellement reliée à aucune API.",
      2
    );
  }
  return (
    <div>
      <Header />
      <section className="connexion">
        <div className="connexion--forms">
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Adresse e-mail"
            className="input"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            className="input"
          />
        </div>
        <button onClick={() => connexion()}>Connexion</button>
      </section>
    </div>
  );
}

export default Home;
