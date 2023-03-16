import "./index.css";

import Header from "../../components/HeaderHorsCo";

function FirstConnexion() {
  return (
    <div>
      <Header />
      <section className="connexion">
        <div className="connexion--forms">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Nouveau mot de passe"
            className="input"
          />
          <input
            type="password"
            name="passwordReapeat"
            id="passwordReapeat"
            placeholder="Répétez le mot de passe"
            className="input"
          />
        </div>
        <button>Changer le mot de passe</button>
        <button className="buttonDeconnexion">Déconnexion</button>
      </section>
    </div>
  );
}

export default FirstConnexion;
